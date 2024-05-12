// @ts-nocheck
import services from '../../services/index';
const { postServices } = services;

export const getPostsForHomepageFilters = (router) =>
  router.route('/postsForHomepageFilters').post(async (req, res) => {
    const response = await postServices.getPostsForHomepageFilters(req);
    return res.status(response.statusCode).send(response);
  });
