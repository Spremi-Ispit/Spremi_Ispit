// @ts-nocheck
import nodemailer from 'nodemailer';
import env from '../config/env';

const sender = {
  mail: env.MAIL_ADDR,
  pass: env.MAIL_PASS
};

const transporter = nodemailer.createTransport({
  host: env.MAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: sender.mail,
    pass: sender.pass
  }
});

export const sendEmail = ({ to, subject, text }) => {
  let mail = {
    from: sender.mail,
    to,
    subject,
    text
  };

  const handleResponse = (error, info) => {
    if (error) {
      console.log(error);
      return;
    }

    console.log('Email sent: ' + info.response);
  };

  transporter.sendMail(mail, handleResponse);
};
