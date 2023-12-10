// @ts-nocheck
import { IsNull, Not } from 'typeorm';
import response from '../../utils/response/index';
import { Comment } from '../../entities/Comment';

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
    return response.OK(comments);
  } else {
    return response.NOT_FOUND(`No reported comments`);
  }
};
