
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'marycynthia490@gmail.com',
    pass: 'utmb vluq owez aelo'
  }
});

const mailOptions = {
  from: 'marycyntia@gmail.com',
  to: 'marycynthia2020@yahoo.com',
  subject: 'Sending Email using Node.js Cynthia',
  text: 'Learning node is fun. That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
