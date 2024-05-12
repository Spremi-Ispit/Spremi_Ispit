// @ts-nocheck
import services from '../../services/index';
const { commentServices } = services;

export const deleteCommentLike = async (req, res) => {
  const response = await commentServices.deleteCommentLike(req);
  return res.status(response.statusCode).send(response);
};
