// @ts-nocheck
import { isBanned } from '../utils/authManager';
import response from '../utils/response';

export const authenticateUserOnLogin = async (req, res, next) => {
  const { email } = req.body;

  const bannedStatus = await isBanned(email);

  if (!bannedStatus.foundUser) {
    const myResponse = response.NOT_FOUND(`User not found`);
    return res.status(myResponse.statusCode).send(myResponse);
  }

  if (bannedStatus.banned) {
    const myResponse = response.BAD_REQUEST(`User profile is banned`);
    return res.status(myResponse.statusCode).send(myResponse);
  }

  next();
};
