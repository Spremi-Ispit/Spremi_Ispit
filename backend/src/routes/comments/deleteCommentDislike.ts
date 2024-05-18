// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services/index';
const { commentServices } = services;

export const deleteCommentDislike = (router) =>
  router
    .route('/dislike')
    .delete(authorizeUserOnApiRequest, async (req, res) => {
      const response = await commentServices.deleteCommentDislike(req);
      return res.status(response.statusCode).send(response);
    });
