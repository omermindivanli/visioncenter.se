'use strict';
require('dotenv').config();
const nodemailer = require('nodemailer');

nodemailer.createTestAccount((err, account) => {
  let transporter = nodemailer.createTransport({
    host: 'mail.citynetwork.se',
    auth: {
      user: process.env.CITYNETWORK_USER,
      pass: process.env.CITYNETWORK_PASS,
    },
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Vision Center Sweden" <sweden@visioncenter.se>', // sender address
    to: 'omer.mindivanli@gmail.com', // list of receivers
    subject: 'Mailer Topic', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Mailer i yaptım. Test mail atiyor mu hemsidan?</b>', // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
});
