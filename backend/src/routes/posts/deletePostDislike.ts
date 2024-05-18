// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services/index';
const { postServices } = services;

export const deletePostDislike = (router) =>
  router
    .route('/dislike')
    .delete(authorizeUserOnApiRequest, async (req, res) => {
      const response = await postServices.deletePostDislike(req);
      return res.status(response.statusCode).send(response);
    });
