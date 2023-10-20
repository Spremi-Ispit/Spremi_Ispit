// @ts-nocheck
import { directoryName, uploadFile } from '../file/utils/upload';

export const uploadPostFile = async (req) => {
  const postId = req.body.postId;
  return await uploadFile(req, postId, directoryName.posts);
};
