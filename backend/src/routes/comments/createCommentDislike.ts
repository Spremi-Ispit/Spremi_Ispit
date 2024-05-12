// @ts-nocheck
import services from '../../services/index';
const { commentServices } = services;

export const createCommentDislike = async (req, res) => {
  const response = await commentServices.createCommentDislike(req);
  return res.status(response.statusCode).send(response);
};
