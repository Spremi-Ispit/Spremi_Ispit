// @ts-nocheck
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'zavrsnirad1.rii@gmail.com',
    pass: 'sifra123'
  }
});

const sendEmail = (mailOptions) => {
  let email = {
    //**************EXAMPLE****************/
    from: 'zavrsnirad1.rii@gmail.com', //from: 'zavrsnirad1.rii@gmail.com',
    to: mailOptions.to, //to: 'zavrsnirad2@gmail.com',
    subject: mailOptions.subject, //subject: 'Sending Email using Node',
    text: mailOptions.text //text: 'That was easy!'
  };

  transporter.sendMail(email, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = sendEmail;
