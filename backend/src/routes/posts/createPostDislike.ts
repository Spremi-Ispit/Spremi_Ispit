// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services/index';
const { postServices } = services;

export const createPostDislike = (router) =>
  router.route('/dislike').post(authorizeUserOnApiRequest, async (req, res) => {
    const response = await postServices.createPostDislike(req);
    return res.status(response.statusCode).send(response);
  });
