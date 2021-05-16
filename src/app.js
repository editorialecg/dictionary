const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv').config();


// Middleware
app.use(morgan('dev'));
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// db
const dbConnect = require('./db/db');

// Routes
app.use(require('./routes/routes'));

module.exports = app

