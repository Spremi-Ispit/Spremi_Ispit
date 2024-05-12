// @ts-nocheck
import services from '../../services/index';
const { postServices } = services;

export const deletePostLike = async (req, res) => {
  const response = await postServices.deletePostLike(req);
  return res.status(response.statusCode).send(response);
};
