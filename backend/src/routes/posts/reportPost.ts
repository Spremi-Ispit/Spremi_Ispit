// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services/index';
const { postServices } = services;

export const reportPost = (router) =>
  router.route('/report').post(authorizeUserOnApiRequest, async (req, res) => {
    const response = await postServices.reportPost(req);
    return res.status(response.statusCode).send(response);
  });
