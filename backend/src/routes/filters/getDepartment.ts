// @ts-nocheck
import services from '../../services/index';
const { filtersServices } = services;

export const getDepartment = (router) =>
  router.route('/department').get(async (req, res) => {
    const response = await filtersServices.getDepartment(req);
    return res.status(response.statusCode).send(response);
  });
