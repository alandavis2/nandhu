const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Verify Transporter
transporter.verify((error, success) => {
    if (error) {
        console.error('---------------------------------------------------');
        console.error('❌ Error connecting to email service:', error.message);
        if (error.code === 'EAUTH') {
            console.error('💡 TIP: It looks like an authentication error.');
            console.error('   If you are using Gmail, you MUST use an App Password.');
            console.error('   Standard passwords do not work.');
            console.error('   Go to: https://myaccount.google.com/apppasswords');
        }
        console.error('---------------------------------------------------');
    } else {
        console.log('✅ Server is ready to take messages');
    }
});

// API Route to Send Email
app.post('/api/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // Send to yourself
        subject: `Portfolio Contact from ${name}`,
        text: `
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}
    `,
        html: `
      <h3>New Contact Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
        console.error('---------------------------------------------------');
        console.error(`❌ Port ${PORT} is already in use.`);
        console.error('   Please close any other terminal windows running the server.');
        console.error('   Or find and kill the process using port ${PORT}.');
        console.error('---------------------------------------------------');
        process.exit(1);
    }
});
