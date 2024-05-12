// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services/index';
const { userServices } = services;

export const getUserByUsername = (router) =>
  router
    .route('/username/:username')
    .get(authorizeUserOnApiRequest, async (req, res) => {
      const response = await userServices.getUserByUsername(req);
      return res.status(response.statusCode).send(response);
    });
