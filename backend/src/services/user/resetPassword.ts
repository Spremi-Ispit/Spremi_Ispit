// @ts-nocheck
import { sendEmail } from '../../utils/nodemailer';
import response from '../../utils/response/index';

export const resetPassword = async (req) => {
  const { email } = req.body;
  try {
    sendEmail({
      to: email,
      subject: 'pass reset',
      text: 'New pass: 1234'
    });
    return response.OK(`Mail with reset code has been sent`);
  } catch (err) {
    response.BAD_REQUEST(`Mail delivery failed`);
  }
};
