// @ts-nocheck
import { User } from '../entities/User';
import response from './response/index';

export const accountBanned = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({
    where: {
      email
    }
  });

  if (!user) {
    const myResponse = response.NOT_FOUND(`User not found`);
    return res.status(myResponse.statusCode).send(myResponse);
  }

  if (user.banned) {
    const myResponse = response.BAD_REQUEST(`User profile is banned`);
    return res.status(myResponse.statusCode).send(myResponse);
  }

  next();
};
