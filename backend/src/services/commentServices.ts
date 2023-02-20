// @ts-nocheck
import response from '../utils/response/index';
import { checkIfLogged } from '../utils/tokenValidation';
import { commentLikeDislikeStatus } from '../utils/enums';
import { removeCommentFiles } from './fileServices';
import { Comment } from '../entities/Comment';
import { User } from '../entities/User';
import { IsNull, Not } from 'typeorm';
import { Post } from '../entities/Post';
import { User } from '../entities/User';

export const deleteComment = async (req) => {
  const commentId = req.params.id;

  const comment = await Comment.findOne({
    where: { id: commentId }
  });

  await comment.remove();
  await removeCommentFiles(req.params.id);
  return response.OK(`Comment removed`);
};

export const getCommentsForPost = async (req) => {
  const { postId } = req.params;

  const loggedRes = checkIfLogged(req);
  let userID = null;
  if (loggedRes.status) {
    userID = loggedRes.userID;
  }

  const comments = await Comment.find({
    relations: [
      'reportedBy',
      'postedBy',
      'files',
      'likedBy',
      'dislikedBy',
      'post'
    ],
    select: {
      post: {
        id: true
      }
    },
    where: {
      post: { id: postId }
    }
  });

  comments.forEach((comment) => {
    comment.likeStatus = commentLikeDislikeStatus.none;
    if (userID) {
      comment.likedBy.forEach((likedBy) => {
        if (likedBy.id === userID) {
          comment.likeStatus = commentLikeDislikeStatus.liked;
        }
      });

      comment.dislikedBy.forEach((dislikedBy) => {
        if (dislikedBy.id === userID) {
          comment.likeStatus = commentLikeDislikeStatus.disliked;
        }
      });
    }

    comment.owner = false;
    if (userID && comment.postedBy.id == userID) {
      comment.owner = true;
    }

    comment.likes = comment.likedBy.length;
    delete comment.likedBy;

    comment.dislikes = comment.dislikedBy.length;
    delete comment.dislikedBy;

    comment.postId = comment.post.id;
    delete comment.post;

    comment.postedBy = comment.postedBy.username;
  });

  if (comments) {
    return response.OK(`Comments retrieved`, comments);
  } else {
    return response.OK(`No comments`, []);
  }
};

export const getReportedComments = async (req) => {
  const comments = await Comment.find({
    relations: [
      'reportedBy',
      'postedBy',
      'files',
      'likedBy',
      'dislikedBy',
      'post'
    ],
    select: {
      reportedBy: {
        username: true
      },
      postedBy: {
        username: true
      }
    },
    where: {
      reportedBy: [{ id: Not(IsNull()) }]
    }
  });

  comments.forEach((comment) => {
    comment.likes = comment.likedBy.length;
    delete comment.likedBy;

    comment.dislikes = comment.dislikedBy.length;
    delete comment.dislikedBy;

    comment.postId = comment.post.id;
    delete comment.post;
  });

  if (comments) {
    return response.OK('Reported comments', comments);
  } else {
    return response.NOT_FOUND(`No reported comments`);
  }
};

export const reportComment = async (req) => {
  const { commentID, userID } = req.body;

  const alreadyReported = await Comment.findOne({
    relations: ['reportedBy'],
    where: {
      id: commentID,
      reportedBy: { id: userID }
    }
  });

  if (!alreadyReported) {
    const reportedBy = await User.findOneBy(userID);
    const comment = await Comment.findOne({
      where: { id: commentID },
      relations: ['reportedBy']
    });

    if (comment && reportedBy) {
      comment.reportedBy.push(reportedBy);
      await comment.save();

      return response.OK(`Comment reported`);
    } else {
      return response.BAD_REQUEST(`User or comment doesnt exist`);
    }
  } else {
    return response.BAD_REQUEST(`Comment already reported`);
  }
};

export const dismissReport = async (req) => {
  const { commentId } = req.body;
  const reportedComment = await Comment.findOne({
    relations: ['reportedBy'],
    where: {
      id: commentId
    }
  });

  if (reportedComment) {
    reportedComment.reportedBy = [];
    await reportedComment.save();
    return response.OK(`Comment report dismissed`);
  } else {
    return response.BAD_REQUEST(
      `Comment report dismiss faild because comment is not reported`
    );
  }
};

export const createComment = async (req) => {
  const { comment, userID } = req.body;
  const { text, postID } = comment;

  const user = await User.findOne({
    where: { id: userID }
  });

  const post = await Post.findOne({
    where: { id: postID }
  });

  if (user && post) {
    const newComment = Comment.create({
      postedBy: user,
      post,
      text
    });
    await newComment.save();
    return response.OK(`Comment created`);
  } else {
    return response.BAD_REQUEST(`User or post doesnt exist`);
  }
};
