// @ts-nocheck
import services from '../../services/index';
const { commentServices } = services;

export const createCommentLike = async (req, res) => {
  const response = await commentServices.createCommentLike(req);
  return res.status(response.statusCode).send(response);
};
