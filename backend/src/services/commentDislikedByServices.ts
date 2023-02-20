// @ts-nocheck
import { User } from '../entities/User';
import { Comment } from '../entities/Comment';
import { commentLikeDislikeStatus } from '../utils/enums';
import response from '../utils/response/index';

export const createCommentDislike = async (req) => {
  const { userID, commentID } = req.body;

  const comment = await Comment.findOne({
    where: { id: commentID },
    relations: ['dislikedBy']
  });

  const user = await User.findOneBy(userID);
  if (user) {
    comment.dislikedBy.push(user);
    await comment.save();

    return response.CREATED(
      `Comment dislike created`,
      commentLikeDislikeStatus.disliked
    );
  } else {
    return response.NOT_FOUND(`Your profile was not found`);
  }
};

export const deleteCommentDislike = async (req) => {
  const { userID, commentID } = req.body;

  const comment = await Comment.findOne({
    where: { id: commentID },
    relations: ['dislikedBy']
  });

  const user = await User.findOneBy(userID);
  if (user) {
    comment.dislikedBy = comment.dislikedBy.filter(
      (dislikedBy) => dislikedBy.id !== userID
    );

    await comment.save();

    return response.CREATED(
      `Comment dislike deleted`,
      commentLikeDislikeStatus.none
    );
  } else {
    return response.NOT_FOUND(`Your profile was not found`);
  }
};
