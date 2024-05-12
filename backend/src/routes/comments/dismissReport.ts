// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services/index';
const { commentServices } = services;

export const dismissReport = (router) =>
  router
    .route('/dismissReport')
    .delete(authorizeUserOnApiRequest, async (req, res) => {
      const response = await commentServices.dismissReport(req);
      return res.status(response.statusCode).send(response);
    });
