// @ts-nocheck
import { User } from '../../entities/User';
import { sendEmail } from '../../utils/nodemailer';
import response from '../../utils/response/index';
import { v4 as uuidv4 } from 'uuid';
import { validateEmail } from '../../utils/validation';
import bcrypt from 'bcrypt';

const now = () => Number(new Date());
const sec = 1000;
const min = 60 * sec;

export const resetPassword = async (req) => {
  const { email } = req.body;

  if (!validateEmail(email)) {
    return response.BAD_REQUEST(`Bad email`);
  }

  const user = await User.findOne({
    where: { email }
  });

  if (!user) {
    return response.NOT_FOUND(`User not found`);
  }

  const oldPassword = user.password;

  const uuid = uuidv4();
  const hashedPassword = await bcrypt.hash(uuid, 10);
  user.password = hashedPassword;
  await user.save();

  setTimeout(async () => {
    const updatedUser = await User.findOne({
      where: { email }
    });

    if (user.password === updatedUser.password) {
      updatedUser.password = oldPassword;
      await updatedUser.save();
    }
  }, 10 * min);

  try {
    sendEmail({
      to: email,
      subject: 'Password reset',
      text: `Use the following code to login and change the password. It will expire at: ${new Date(
        now() + 10 * min
      )}. Code: ${uuid} `
    });
    return response.OK(`Mail with the reset code has been sent.`);
  } catch (err) {
    return response.BAD_REQUEST(`Mail delivery failed`);
  }
};
