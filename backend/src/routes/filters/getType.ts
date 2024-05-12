// @ts-nocheck
import services from '../../services/index';
const { filtersServices } = services;

export const getType = async (req, res) => {
  const response = await filtersServices.getType(req);
  return res.status(response.statusCode).send(response);
};
