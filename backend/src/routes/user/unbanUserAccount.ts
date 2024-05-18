// @ts-nocheck
import { authorizeAdminOnApiRequest } from '../../middleware/authorizeAdminOnApiRequest';
import services from '../../services/index';
const { userServices } = services;

export const unbanUserAccount = (router) =>
  router
    .route('/unbanUser')
    .post(authorizeAdminOnApiRequest, async (req, res) => {
      const response = await userServices.unbanUserAccount(req);
      return res.status(response.statusCode).send(response);
    });
