// @ts-nocheck
import services from '../../services/index';
const { userServices } = services;

export const getUserByUsername = async (req, res) => {
  const response = await userServices.getUserByUsername(req);
  return res.status(response.statusCode).send(response);
};
