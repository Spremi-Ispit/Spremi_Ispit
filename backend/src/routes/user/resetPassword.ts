// @ts-nocheck
import services from '../../services/index';
const { userServices } = services;

export const resetPassword = (router) =>
  router.route('/resetPassword').post(async (req, res) => {
    const response = await userServices.resetPassword(req);
    return res.status(response.statusCode).send(response);
  });
