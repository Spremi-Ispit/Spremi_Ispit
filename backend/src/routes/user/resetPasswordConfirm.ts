// @ts-nocheck
import services from '../../services/index';
const { userServices } = services;

export const resetPasswordConfirm = (router) =>
  router.route('/resetPasswordConfirm').post(async (req, res) => {
    const response = await userServices.resetPasswordConfirm(req);
    return res.status(response.statusCode).send(response);
  });
