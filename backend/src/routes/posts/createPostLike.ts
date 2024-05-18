// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services/index';
const { postServices } = services;

export const createPostLike = (router) =>
  router.route('/like').post(authorizeUserOnApiRequest, async (req, res) => {
    const response = await postServices.createPostLike(req);
    return res.status(response.statusCode).send(response);
  });
