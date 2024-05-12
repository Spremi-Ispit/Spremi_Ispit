// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services/index';
const { userServices } = services;

export const updateUsername = (router) =>
  router
    .route('/updateUsername')
    .post(authorizeUserOnApiRequest, async (req, res) => {
      const response = await userServices.updateUsername(req);
      return res.status(response.statusCode).send(response);
    });
