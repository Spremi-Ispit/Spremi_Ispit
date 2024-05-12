// @ts-nocheck
import services from '../../services/index';
const { authServices } = services;

export const registerUser = async (req, res) => {
  const response = await authServices.registerUser(req);
  return res.status(response.statusCode).send(response);
};
