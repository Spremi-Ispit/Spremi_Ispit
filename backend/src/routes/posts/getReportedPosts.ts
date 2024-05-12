// @ts-nocheck
import services from '../../services/index';
const { postServices } = services;

export const getReportedPosts = async (req, res) => {
  const response = await postServices.getReportedPosts(req);
  return res.status(response.statusCode).send(response);
};
