const express = require('express');
const router = express.Router();

const word = require('../api/word/routes');

router.use('/wordsynant', word);

module.exports = router;