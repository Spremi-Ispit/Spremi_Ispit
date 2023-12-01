// @ts-nocheck
import response from '../../utils/response/index';
import { User } from '../../entities/User';
import { loginUser } from '../auth';
import bcrypt from 'bcrypt';

export const updateUsername = async (req) => {
  const { password, email, newUsername } = req.body;

  const user = await User.findOne({
    where: { email }
  });

  if (!user) {
    return response.NOT_FOUND(`User not found`);
  }

  try {
    if (await bcrypt.compare(password, user.password)) {
      user.username = newUsername;
      await user.save();
      return await loginUser(req);
    } else {
      return response.NOT_FOUND(`User not found`);
    }
  } catch (err) {
    return response.INTERNAL_SERVER_ERROR(err.toString());
  }
};
