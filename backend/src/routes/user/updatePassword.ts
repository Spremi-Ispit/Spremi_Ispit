// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services/index';
const { userServices } = services;

export const updatePassword = (router) =>
  router
    .route('/updatePassword')
    .post(authorizeUserOnApiRequest, async (req, res) => {
      const response = await userServices.updatePassword(req);
      return res.status(response.statusCode).send(response);
    });
