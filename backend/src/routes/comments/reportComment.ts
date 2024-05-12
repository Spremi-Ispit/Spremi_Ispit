// @ts-nocheck
import services from '../../services/index';
const { commentServices } = services;

export const reportComment = async (req, res) => {
  const response = await commentServices.reportComment(req);
  return res.status(response.statusCode).send(response);
};
