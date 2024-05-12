// @ts-nocheck
import services from '../../services/index';
const { postServices } = services;

export const createPost = async (req, res) => {
  const response = await postServices.createPost(req);
  return res.status(response.statusCode).send(response);
};
