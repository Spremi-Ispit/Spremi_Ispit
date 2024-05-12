// @ts-nocheck
import services from '../../services/index';
const { commentServices } = services;

export const deleteComment = async (req, res) => {
  const response = await commentServices.deleteComment(req);
  return res.status(response.statusCode).send(response);
};
