const nodemailer = require('nodemailer');
const mailerConfig = require('../config.js');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: mailerConfig.user,
    pass: mailerConfig.password
  }
});

const formSubmissionHandler = function(name, email, subject, message) {
  let mailOptions = {
    from: mailerConfig.user,
    to: mailerConfig.user,
    subject: 'New Message from Personal Website',
    text: `
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `
  }

  transporter.sendMail(mailOptions, function(err, res) {
    if (err) {
      console.log('Error: ', err);
    } else {
      console.log('Email sent!');
    }
  });
}  

module.exports = formSubmissionHandler;