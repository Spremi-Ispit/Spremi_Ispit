// @ts-nocheck
import services from '../../services/index';
const { fileServices } = services;

export const uploadCommentFile = async (req, res) => {
  const response = await fileServices.uploadCommentFile(req);
  return res.status(response.statusCode).send(response);
};
