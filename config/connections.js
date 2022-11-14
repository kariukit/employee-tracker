const mysql = require('mysql2');
const express = require('express');

//require('dotenv').config();
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '#Kariukit321',
  database: 'employees'
});

module.exports = connection;