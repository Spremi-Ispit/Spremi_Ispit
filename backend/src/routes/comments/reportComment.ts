// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services/index';
const { commentServices } = services;

export const reportComment = (router) =>
  router.route('/report').post(authorizeUserOnApiRequest, async (req, res) => {
    const response = await commentServices.reportComment(req);
    return res.status(response.statusCode).send(response);
  });
