// @ts-nocheck
import services from '../../services/index';
const { postServices } = services;

export const getPostById = (router) =>
  router.route('/postId/:id').get(async (req, res) => {
    const response = await postServices.getPostById(req);
    return res.status(response.statusCode).send(response);
  });
