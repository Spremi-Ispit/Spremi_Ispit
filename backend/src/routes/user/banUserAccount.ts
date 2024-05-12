// @ts-nocheck
import { authorizeAdminOnApiRequest } from '../../middleware/authorizeAdminOnApiRequest';
import services from '../../services/index';
const { userServices } = services;

export const banUserAccount = (router) =>
  router
    .route('/banUser')
    .post(authorizeAdminOnApiRequest, async (req, res) => {
      const response = await userServices.banUserAccount(req);
      return res.status(response.statusCode).send(response);
    });
