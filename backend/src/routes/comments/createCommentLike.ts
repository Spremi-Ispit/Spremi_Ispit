// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services/index';
const { commentServices } = services;

export const createCommentLike = (router) =>
  router.route('/like').post(authorizeUserOnApiRequest, async (req, res) => {
    const response = await commentServices.createCommentLike(req);
    return res.status(response.statusCode).send(response);
  });
