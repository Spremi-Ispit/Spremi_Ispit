// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services/index';
const { commentServices } = services;

export const deleteComment = (router) =>
  router
    .route('/commentId/:id')
    .delete(authorizeUserOnApiRequest, async (req, res) => {
      const response = await commentServices.deleteComment(req);
      return res.status(response.statusCode).send(response);
    });
