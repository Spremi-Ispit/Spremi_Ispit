// @ts-nocheck
import services from '../../services/index';
const { filtersServices } = services;

export const getSubject = (router) =>
  router.route('/subject').get(async (req, res) => {
    const response = await filtersServices.getSubject(req);
    return res.status(response.statusCode).send(response);
  });
