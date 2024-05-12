// @ts-nocheck
import services from '../../services/index';
const { postServices } = services;

export const dismissReport = async (req, res) => {
  const response = await postServices.dismissReport(req);
  return res.status(response.statusCode).send(response);
};
