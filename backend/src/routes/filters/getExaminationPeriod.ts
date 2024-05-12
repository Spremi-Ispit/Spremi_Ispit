// @ts-nocheck
import services from '../../services/index';
const { filtersServices } = services;

export const getExaminationPeriod = async (req, res) => {
  const response = await filtersServices.getExaminationPeriod(req);
  return res.status(response.statusCode).send(response);
};
