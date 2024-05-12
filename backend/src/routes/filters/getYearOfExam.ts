// @ts-nocheck
import services from '../../services/index';
const { filtersServices } = services;

export const getYearOfExam = async (req, res) => {
  const response = await filtersServices.getYearOfExam(req);
  return res.status(response.statusCode).send(response);
};
