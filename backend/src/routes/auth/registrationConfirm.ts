// @ts-nocheck
import services from '../../services/index';
const { authServices } = services;

export const registrationConfirm = (router) =>
  router.route('/registrationConfirm').post(async (req, res) => {
    const response = await authServices.registrationConfirm(req);
    return res.status(response.statusCode).send(response);
  });
