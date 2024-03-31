// @ts-nocheck
import nodemailer from 'nodemailer';
import env from '../config/env';

const transporter = nodemailer.createTransport({
  host: env.MAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: env.MAIL_ADDR,
    pass: env.MAIL_PASS
  }
});

export const sendEmail = ({ to, subject, text }) => {
  transporter.sendMail(
    {
      from: env.MAIL_ADDR,
      to,
      subject,
      text
    },
    (error, info) => {
      if (error) {
        console.log(error);
        return;
      }

      console.log('Email sent: ' + info.response);
    }
  );
};
