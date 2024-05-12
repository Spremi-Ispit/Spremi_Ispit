// @ts-nocheck
import services from '../../services/index';
const { userServices } = services;

export const updateUserRole = async (req, res) => {
  const response = await userServices.updateUserRole(req);
  return res.status(response.statusCode).send(response);
};
