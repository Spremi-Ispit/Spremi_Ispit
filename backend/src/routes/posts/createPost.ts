// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services/index';
const { postServices } = services;

export const createPost = (router) =>
  router.route('/').post(authorizeUserOnApiRequest, async (req, res) => {
    const response = await postServices.createPost(req);
    return res.status(response.statusCode).send(response);
  });
