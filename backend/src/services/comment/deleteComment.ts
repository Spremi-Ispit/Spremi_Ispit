// @ts-nocheck
import { Comment } from '../../entities/Comment';
import response from '../../utils/response';
import { removeCommentFiles } from '../file';

export const deleteComment = async (req) => {
  const commentId = req.params.id;

  const comment = await Comment.findOne({
    where: { id: commentId }
  });

  await comment.remove();
  await removeCommentFiles(req.params.id);
  return response.OK(`Comment removed`);
};
