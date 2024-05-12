// @ts-nocheck
import services from '../../services/index';
const { postServices } = services;

export const deletePostDislike = async (req, res) => {
  const response = await postServices.deletePostDislike(req);
  return res.status(response.statusCode).send(response);
};
