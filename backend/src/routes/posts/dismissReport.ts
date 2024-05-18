// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services/index';
const { postServices } = services;

export const dismissReport = (router) =>
  router
    .route('/dismissReport/postId/:postId/')
    .delete(authorizeUserOnApiRequest, async (req, res) => {
      const response = await postServices.dismissReport(req);
      return res.status(response.statusCode).send(response);
    });
