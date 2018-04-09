const http = require('http');
const nodemailer = require('nodemailer');
const mailerConfig = require('../mailer.js');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: mailerConfig.user,
    pass: mailerConfig.password
  }
});

var mailOptions = {
  from: mailerConfig.user,
  to: mailerConfig.user,
  subject: 'New Message from Personal Website',
  html: 'test'
}

transporter.sendMail(mailOptions, function(err, res) {
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log('Email sent!');
  }
})

const mail = function () {
  alert('hi');
};