// @ts-nocheck
import response from '../../utils/response/index';
import { User } from '../../entities/User';

export const getUsernamesWithRoles = async (req) => {
  const users = await User.find();
  const usersResponse = [];
  users.forEach((user) => {
    usersResponse.push({
      username: user.username,
      role: user.role,
      email: user.email
    });
  });

  return response.OK(usersResponse);
};
