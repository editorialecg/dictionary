const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv').config();


// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// db
const dbConnect = require('./db/db');

// Routes
app.use(require('./routes/routes'));

module.exports = app

