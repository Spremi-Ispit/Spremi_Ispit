// @ts-nocheck
import services from '../../services/index';
const { userServices } = services;

export const getUsernamesWithRoles = async (req, res) => {
  const response = await userServices.getUsernamesWithRoles(req);
  return res.status(response.statusCode).send(response);
};
