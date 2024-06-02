// @ts-nocheck
import { Comment } from '../../entities/Comment';
import { User } from '../../entities/User';
import { userRole } from '../../utils/enums';
import response from '../../utils/response';
import { removeCommentFiles } from '../file';

export const deleteComment = async (req) => {
  const commentId = req.params.id;
  const { userId } = req.body;

  const user = await User.findOne({
    where: { id: userId }
  });

  const comment = await Comment.findOne({
    where: { id: commentId },
    relations: ['postedBy']
  });

  if (!(comment?.postedBy.id === userId || user?.role === userRole.admin)) {
    return response.UNAUTHORIZED(`Not authorized`);
  }

  await comment.remove();
  await removeCommentFiles(req.params.id);
  return response.OK(`Comment removed`);
};
