// @ts-nocheck
import { authorizeAdminOnApiRequest } from '../../middleware/authorizeAdminOnApiRequest';
import services from '../../services/index';
const { userServices } = services;

export const blacklistUserAccount = (router) =>
  router
    .route('/blacklistUser')
    .post(authorizeAdminOnApiRequest, async (req, res) => {
      const response = await userServices.blacklistUserAccount(req);
      return res.status(response.statusCode).send(response);
    });
