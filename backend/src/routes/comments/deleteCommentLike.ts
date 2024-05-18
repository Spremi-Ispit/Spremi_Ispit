// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services/index';
const { commentServices } = services;

export const deleteCommentLike = (router) =>
  router.route('/like').delete(authorizeUserOnApiRequest, async (req, res) => {
    const response = await commentServices.deleteCommentLike(req);
    return res.status(response.statusCode).send(response);
  });
