// @ts-nocheck
import services from '../../services/index';
const { commentServices } = services;

export const getReportedComments = async (req, res) => {
  const response = await commentServices.getReportedComments(req);
  return res.status(response.statusCode).send(response);
};
