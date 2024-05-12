// @ts-nocheck
import services from '../../services/index';
const { postServices } = services;

export const getPostsByUsername = async (req, res) => {
  const response = await postServices.getPostsByUsername(req);
  return res.status(response.statusCode).send(response);
};
