// @ts-nocheck
import services from '../../services/index';
const { userServices } = services;

export const updatePassword = async (req, res) => {
  const response = await userServices.updatePassword(req);
  return res.status(response.statusCode).send(response);
};
