// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services/index';
const { commentServices } = services;

export const getReportedComments = (router) =>
  router.route('/reports').get(authorizeUserOnApiRequest, async (req, res) => {
    const response = await commentServices.getReportedComments(req);
    return res.status(response.statusCode).send(response);
  });
