// @ts-nocheck
import services from '../../services/index';
const { commentServices } = services;

export const createComment = async (req, res) => {
  const response = await commentServices.createComment(req);
  return res.status(response.statusCode).send(response);
};
