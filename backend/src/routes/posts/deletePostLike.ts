// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services/index';
const { postServices } = services;

export const deletePostLike = (router) =>
  router.route('/like').delete(authorizeUserOnApiRequest, async (req, res) => {
    const response = await postServices.deletePostLike(req);
    return res.status(response.statusCode).send(response);
  });
