// @ts-nocheck
import services from '../../services/index';
const { filtersServices } = services;

export const getExaminationPeriod = (router) =>
  router.route('/examinationPeriod').get(async (req, res) => {
    const response = await filtersServices.getExaminationPeriod(req);
    return res.status(response.statusCode).send(response);
  });
