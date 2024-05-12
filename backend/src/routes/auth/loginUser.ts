// @ts-nocheck
import services from '../../services/index';
import { authenticateUserOnLogin } from '../../middleware/authenticateUserOnLogin';

const { authServices } = services;

export const loginUser = (router) =>
  router.route('/login').post(authenticateUserOnLogin, async (req, res) => {
    const response = await authServices.loginUser(req);
    return res.status(response.statusCode).send(response);
  });
