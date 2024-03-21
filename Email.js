const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'joswhite2001@gmail.com',
    pass: 'ggjf lali czlr jyyi'
  }
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: `${name} <${email}>`,
    to: 'recipientemail@gmail.com',
    subject: 'New email from your website',
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Error while sending email.' });
    }
    return res.status(200).json({ message: 'Email sent successfully.' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});