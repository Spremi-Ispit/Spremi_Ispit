// @ts-nocheck
import services from '../../services/index';
const { postServices } = services;

export const reportPost = async (req, res) => {
  const response = await postServices.reportPost(req);
  return res.status(response.statusCode).send(response);
};
