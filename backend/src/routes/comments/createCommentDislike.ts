// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services/index';
const { commentServices } = services;

export const createCommentDislike = (router) =>
  router.route('/dislike').post(authorizeUserOnApiRequest, async (req, res) => {
    const response = await commentServices.createCommentDislike(req);
    return res.status(response.statusCode).send(response);
  });
