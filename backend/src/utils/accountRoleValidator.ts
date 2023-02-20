// @ts-nocheck
import { User } from '../entities/User';
import { userRole } from './enums';
import response from './response/index';

export const accountIsAdmin = async (req, res, next) => {
  return await accountRoleValidator(req, res, next, userRole.admin);
};

const accountRoleValidator = async (req, res, next, role) => {
  const { userID } = req.body;

  const user = await User.findOneBy(userID);
  if (user?.role === role) {
    next();
  } else {
    return response.BAD_REQUEST(`Invalid request`);
  }
};
