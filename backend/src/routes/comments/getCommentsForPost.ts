// @ts-nocheck
import services from '../../services/index';
const { commentServices } = services;

export const getCommentsForPost = (router) =>
  router.route('/post/:postId').get(async (req, res) => {
    const response = await commentServices.getCommentsForPost(req);
    return res.status(response.statusCode).send(response);
  });
