// @ts-nocheck
import { User } from '../../entities/User';
import { Comment } from '../../entities/Comment';
import { commentLikeDislikeStatus } from '../../utils/enums';
import response from '../../utils/response/index';

export const deleteCommentDislike = async (req) => {
  const { userId, commentID } = req.body;

  const comment = await Comment.findOne({
    where: { id: commentID },
    relations: ['dislikedBy']
  });

  const user = await User.findOne({
    where: { id: userId }
  });

  if (user) {
    comment.dislikedBy = comment.dislikedBy.filter(
      (dislikedBy) => dislikedBy.id !== userId
    );

    await comment.save();

    return response.CREATED(commentLikeDislikeStatus.none);
  } else {
    return response.NOT_FOUND(`Your profile was not found`);
  }
};
