// @ts-nocheck
import { directoryName, uploadFile } from '../file/utils/upload';

export const uploadCommentFile = async (req) => {
  const commentId = req.body.commentId;
  return await uploadFile(req, commentId, directoryName.comments);
};
