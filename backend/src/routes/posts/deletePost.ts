// @ts-nocheck
import services from '../../services/index';
const { postServices } = services;

export const deletePost = async (req, res) => {
  const response = await postServices.deletePost(req);
  return res.status(response.statusCode).send(response);
};
