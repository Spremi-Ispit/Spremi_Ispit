// @ts-nocheck
import services from '../../services/index';
const { userServices } = services;

export const unbanUserAccount = async (req, res) => {
  const response = await userServices.unbanUserAccount(req);
  return res.status(response.statusCode).send(response);
};
