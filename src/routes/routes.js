const express = require('express');
const router = express.Router();

const word = require('../api/word/routes');
const blog = require('../api/blog/routes')

router.use('/wordsynant', word);
router.use('/blog', blog)

module.exports = router;