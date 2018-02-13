'use strict';
const nodemailer = require('nodemailer');
const express = require('express');
const nodemon = require('nodemon');
const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();

nodemailer.createTestAccount((err, account) => {
  let transporter = nodemailer.createTransport({
    host: 'mail.citynetwork.se',
    auth: {
      user: process.env.CITYNETWORK_USER,
      pass: process.env.CITYNETWORK_PASS,
    },
    secure: false,
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: '"Vision Center Sweden" <sweden@visioncenter.se>', // sender address
    to: 'omer.mindivanli@gmail.com', // list of receivers
    subject: 'Mailer Topic', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Mailer i yaptım. Test mail atiyor mu hemsidan?</b>', // html body
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Välkommen till Vision Center Sweden' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
