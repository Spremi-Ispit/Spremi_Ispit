// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services/index';
const { postServices } = services;

export const getCommentedPosts = (router) =>
  router
    .route('/commentedBy/:username')
    .get(authorizeUserOnApiRequest, async (req, res) => {
      const response = await postServices.getCommentedPosts(req);
      return res.status(response.statusCode).send(response);
    });
