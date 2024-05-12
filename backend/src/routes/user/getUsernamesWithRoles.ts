// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services/index';
const { userServices } = services;

export const getUsernamesWithRoles = (router) =>
  router.route('/roles').get(authorizeUserOnApiRequest, async (req, res) => {
    const response = await userServices.getUsernamesWithRoles(req);
    return res.status(response.statusCode).send(response);
  });
