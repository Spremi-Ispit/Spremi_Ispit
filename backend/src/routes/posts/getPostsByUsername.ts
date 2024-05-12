// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services/index';
const { postServices } = services;

export const getPostsByUsername = (router) =>
  router.route('/user').get(authorizeUserOnApiRequest, async (req, res) => {
    const response = await postServices.getPostsByUsername(req);
    return res.status(response.statusCode).send(response);
  });
