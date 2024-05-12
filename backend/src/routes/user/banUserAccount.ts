// @ts-nocheck
import services from '../../services/index';
const { userServices } = services;

export const banUserAccount = async (req, res) => {
  const response = await userServices.banUserAccount(req);
  return res.status(response.statusCode).send(response);
};
