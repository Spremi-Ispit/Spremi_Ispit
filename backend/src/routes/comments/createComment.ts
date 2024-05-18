// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services/index';
const { commentServices } = services;

export const createComment = (router) =>
  router.route('/').post(authorizeUserOnApiRequest, async (req, res) => {
    const response = await commentServices.createComment(req);
    return res.status(response.statusCode).send(response);
  });
