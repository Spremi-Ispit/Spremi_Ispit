// @ts-nocheck
import response from '../../utils/response/index';
import { User } from '../../entities/User';

export const updateUserRole = async (req) => {
  const { email, role } = req.body;

  const user = await User.findOne({
    where: {
      email
    }
  });

  if (user) {
    user.role = role;
    await user.save();
    return response.OK(`User role updated`);
  } else {
    return response.NOT_FOUND(`User not found`);
  }
};
