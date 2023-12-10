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
const expirationTime = 10 * min;

const resetRequests = [];

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

  const uuid = uuidv4();
  resetRequests.push({ email, resetCode: uuid });

  setTimeout(async () => {
    const indexOfResetRequest = resetRequests.findIndex((request) => {
      return request.resetCode === uuid;
    });

    if (indexOfResetRequest !== -1) {
      resetRequests.splice(indexOfResetRequest, 1);
    }
  }, expirationTime);

  try {
    sendEmail({
      to: email,
      subject: 'Password reset',
      text: `Use the following code to login and change the password. It will expire at: ${new Date(
        now() + expirationTime
      )}. \n Code: ${uuid} `
    });

    return response.OK(`Mail with the reset code has been sent.`);
  } catch (err) {
    return response.BAD_REQUEST(`Mail delivery failed`);
  }
};

export const resetPasswordConfirm = async (req) => {
  const { resetCode, password } = req.body;

  const indexOfResetRequest = resetRequests.findIndex((request) => {
    return request.resetCode === resetCode;
  });

  if (indexOfResetRequest === -1) {
    return response.BAD_REQUEST(`Bad request`);
  }

  const resetRequest = resetRequests.splice(indexOfResetRequest, 1)[0];
  const { email } = resetRequest;

  const user = await User.findOne({
    where: { email }
  });

  const hashedPassword = await bcrypt.hash(password, 10);
  user.password = hashedPassword;
  await user.save();

  return response.OK(`Password has been updated`);
};
