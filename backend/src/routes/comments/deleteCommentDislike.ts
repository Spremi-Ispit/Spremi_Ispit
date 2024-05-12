// @ts-nocheck
import services from '../../services/index';
const { commentServices } = services;

export const deleteCommentDislike = async (req, res) => {
  const response = await commentServices.deleteCommentDislike(req);
  return res.status(response.statusCode).send(response);
};
