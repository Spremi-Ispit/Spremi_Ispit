// @ts-nocheck
import { User } from '../../entities/User';
import { Comment } from '../../entities/Comment';
import { commentLikeDislikeStatus } from '../../utils/enums';
import response from '../../utils/response/index';

export const createCommentLike = async (req) => {
  const { userID, commentID } = req.body;

  const comment = await Comment.findOne({
    where: { id: commentID },
    relations: ['likedBy']
  });

  const user = await User.findOne({
    where: { id: userID }
  });

  if (user) {
    comment.likedBy.push(user);
    await comment.save();

    return response.CREATED(commentLikeDislikeStatus.liked);
  } else {
    return response.NOT_FOUND(`Your profile was not found`);
  }
};
