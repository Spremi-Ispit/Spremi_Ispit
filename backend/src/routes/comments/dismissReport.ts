// @ts-nocheck
import services from '../../services/index';
const { commentServices } = services;

export const dismissReport = async (req, res) => {
  const response = await commentServices.dismissReport(req);
  return res.status(response.statusCode).send(response);
};
