// @ts-nocheck
import response from '../../utils/response/index';
import { User } from '../../entities/User';
import { loginUser } from '../auth';
import bcrypt from 'bcrypt';

export const updatePassword = async (req) => {
  const { newPassword, password, email } = req.body;

  const user = await User.findOne({
    where: { email }
  });

  if (!user) {
    return response.NOT_FOUND(`User not found`);
  } else {
    if (await bcrypt.compare(password, user.password)) {
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      await user.save();
      req.body.password = newPassword;
      return await loginUser(req);
    } else {
      return response.NOT_FOUND(`User not found`);
    }
  }
};
