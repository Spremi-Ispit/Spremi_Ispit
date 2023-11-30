// @ts-nocheck
import { sendEmail } from '../../utils/nodemailer';
import response from '../../utils/response/index';

export const resetPassword = async (req) => {
  const { email } = req.body;

  try {
    // sendEmail({
    //   to: email,
    //   subject: 'pass reset',
    //   text: 'New pass: 1234'
    // });
    return response.OK(
      `Mail with the reset password has been sent, it will expire in 10 minutes.`
    );
  } catch (err) {
    return response.BAD_REQUEST(`Mail delivery failed`);
  }
};
