// @ts-nocheck
import services from '../../services/index';
const { userServices } = services;

export const updateUsername = async (req, res) => {
  const response = await userServices.updateUsername(req);
  return res.status(response.statusCode).send(response);
};
