// @ts-nocheck
import services from '../../services/index';

const { authServices } = services;

export const loginUser = (router) =>
  router.route('/login').post(async (req, res) => {
    const response = await authServices.loginUser(req);
    return res.status(response.statusCode).send(response);
  });
