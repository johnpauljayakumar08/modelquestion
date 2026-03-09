const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
const port = process.env.PORT || 5005;

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

// Initialize database tables
async function initializeDatabase() {
  try {
    await pool.query(`CREATE TABLE IF NOT EXISTS registrations (
      id INT AUTO_INCREMENT PRIMARY KEY,
      fullName VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(20) NOT NULL,
      currentClass VARCHAR(50),
      board VARCHAR(100),
      school VARCHAR(255),
      city VARCHAR(100),
      parentName VARCHAR(255),
      parentPhone VARCHAR(20),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`);
    await pool.query(`CREATE TABLE IF NOT EXISTS contacts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      fullName VARCHAR(255) NOT NULL,
      phone VARCHAR(20) NOT NULL,
      email VARCHAR(255) NOT NULL,
      city VARCHAR(100),
      role VARCHAR(100),
      message TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`);
    await pool.query(`CREATE TABLE IF NOT EXISTS admins (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    )`);
    await pool.query(`INSERT IGNORE INTO admins (username, password) VALUES
      ('admin', 'admin123'),
      ('chitradevi.m@kggeniuslabs.com', 'chitra@123'),
      ('pavithra.s@kggeniuslabs.com', 'pavithra@123')
    `);
    // ensure plain password for admin if ever updated
    await pool.query(`UPDATE admins SET password = 'admin123' WHERE username = 'admin'`);
    console.log('Database initialized successfully');
  } catch (err) {
    console.error('Error initializing database:', err);
  }
}

// email notifications removed as per requirements
// helper stub (no-op) kept for potential future use
async function sendNotification(subject, text) {
  console.log('Notification not sent (mail disabled):', subject);
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
    // email notification disabled
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
    // email notification disabled
    res.json({ success: true, message: 'Message received' });
  } catch (err) {
    console.error('Error handling contact', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.get('/api/registrations', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM registrations ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching registrations', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/contacts', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching contacts', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await pool.query('SELECT password FROM admins WHERE username = ?', [username]);
    if (rows.length === 0) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    if (password === rows[0].password) {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error('Error during login', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Initialize database and start server
initializeDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}).catch(err => {
  console.error('Failed to initialize database', err);
});