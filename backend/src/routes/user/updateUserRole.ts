// @ts-nocheck
import { authorizeAdminOnApiRequest } from '../../middleware/authorizeAdminOnApiRequest';
import services from '../../services/index';
const { userServices } = services;

export const updateUserRole = (router) =>
  router
    .route('/updateRole')
    .post(authorizeAdminOnApiRequest, async (req, res) => {
      const response = await userServices.updateUserRole(req);
      return res.status(response.statusCode).send(response);
    });
