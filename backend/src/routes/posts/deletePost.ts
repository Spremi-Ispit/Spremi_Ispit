// @ts-nocheck
import services from '../../services/index';
const { postServices } = services;

export const deletePost = (router) =>
  router.route('/postId/:id').delete(async (req, res) => {
    const response = await postServices.deletePost(req);
    return res.status(response.statusCode).send(response);
  });
