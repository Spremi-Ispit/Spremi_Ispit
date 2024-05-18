// @ts-nocheck
import { authorizeUserOnApiRequest } from '../../middleware/authorizeUserOnApiRequest';
import services from '../../services/index';
const { postServices } = services;

export const getReportedPosts = (router) =>
  router.route('/reports').get(authorizeUserOnApiRequest, async (req, res) => {
    const response = await postServices.getReportedPosts(req);
    return res.status(response.statusCode).send(response);
  });
