// @ts-nocheck
import services from '../../services/index';
const { userServices } = services;

export const getUsersAndLikes = (router) =>
  router.route('/likes').get(async (req, res) => {
    const response = await userServices.getUsersAndLikes(req);
    return res.status(response.statusCode).send(response);
  });
