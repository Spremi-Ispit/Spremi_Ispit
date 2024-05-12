// @ts-nocheck
import services from '../../services/index';
const { postServices } = services;

export const getCommentedPosts = async (req, res) => {
  const response = await postServices.getCommentedPosts(req);
  return res.status(response.statusCode).send(response);
};
