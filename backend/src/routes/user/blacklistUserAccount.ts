// @ts-nocheck
import services from '../../services/index';
const { userServices } = services;

export const blacklistUserAccount = async (req, res) => {
  const response = await userServices.blacklistUserAccount(req);
  return res.status(response.statusCode).send(response);
};
