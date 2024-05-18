// @ts-nocheck
import services from '../../services/index';
const { filtersServices } = services;

export const getYearsOfStudy = (router) =>
  router.route('/yearsOfStudy').get(async (req, res) => {
    const response = await filtersServices.getYearsOfStudy(req);
    return res.status(response.statusCode).send(response);
  });
