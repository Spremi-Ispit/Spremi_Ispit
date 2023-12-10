// @ts-nocheck
import response from '../../utils/response/index';
import { User } from '../../entities/User';

export const getUserByUsername = async (req) => {
  const { username } = req.params;

  const user = await User.findOne({
    where: {
      username
    }
  });

  if (user) {
    return response.OK(user);
  } else {
    return response.NOT_FOUND(`No user found`);
  }
};
