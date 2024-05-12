// @ts-nocheck
import services from '../../services/index';
const { postServices } = services;

export const createPostLike = async (req, res) => {
  const response = await postServices.createPostLike(req);
  return res.status(response.statusCode).send(response);
};
