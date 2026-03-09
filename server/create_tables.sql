-- SQL queries to create the required tables for the modelquestions database

-- Create registrations table
CREATE TABLE IF NOT EXISTS registrations (
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
);

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullName VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    city VARCHAR(100),
    role VARCHAR(100),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create admins table
CREATE TABLE IF NOT EXISTS admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Insert default and additional admin users (plain text passwords)
INSERT IGNORE INTO admins (username, password) VALUES
  ('admin', 'admin123'),
  ('chitradevi.m@kggeniuslabs.com', 'chitra@123'),
  ('pavithra.s@kggeniuslabs.com', 'pavithra@123');