const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mysql = require('mysql2/promise');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MySQL pool (configure via env variables)
// NOTE: ensure the `contacts` table includes columns fullName, phone, email, city, role, message
// and `registrations` table matches the fields inserted below.
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'Johnpaul@123',
  database: process.env.DB_NAME || 'modelquestions',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// simple mail transporter using environment variables
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || 'smtp.example.com',
  port: process.env.MAIL_PORT || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USER || '',
    pass: process.env.MAIL_PASS || ''
  }
});

// helper to send notification email
async function sendNotification(subject, text) {
  try {
    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM || 'no-reply@modelquestions.com',
      to: process.env.MAIL_TO || 'admin@modelquestions.com',
      subject,
      text
    });
    console.log('Mail sent: %s', info.messageId);
  } catch (err) {
    console.error('Error sending email', err);
  }
}

app.post('/api/register', async (req, res) => {
  const data = req.body;
  console.log('Registration data:', data);
  try {
    const { fullName, email, phone, currentClass, board, school, city, parentName, parentPhone } = data;
    await pool.query(
      `INSERT INTO registrations (fullName,email,phone,currentClass,board,school,city,parentName,parentPhone,created_at) VALUES (?,?,?,?,?,?,?,?,?,NOW())`,
      [fullName, email, phone, currentClass, board, school, city, parentName, parentPhone]
    );
    await sendNotification('New TARGET MBBS Registration', JSON.stringify(data, null, 2));
    res.json({ success: true, message: 'Registration received' });
  } catch (err) {
    console.error('Error handling registration', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.post('/api/contact', async (req, res) => {
  const data = req.body;
  console.log('Contact message:', data);
  try {
    const { fullName, phone, email, city, role, message } = data;
    await pool.query(
      `INSERT INTO contacts (fullName,phone,email,city,role,message,created_at) VALUES (?,?,?,?,?,?,NOW())`,
      [fullName, phone, email, city, role, message]
    );
    await sendNotification('New Contact Message', JSON.stringify(data, null, 2));
    res.json({ success: true, message: 'Message received' });
  } catch (err) {
    console.error('Error handling contact', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});