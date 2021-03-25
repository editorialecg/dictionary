const express = require('express')
const router = express.Router()
const cors = require('cors')

const opt = {
    origin: [process.env.CORS]
}

const { saveWord, findWord } = require('./controller')

router.get('/findword/:word', cors(opt), (req, res) => {
    findWord(req, res)
})

router.post('/saveword', cors(opt), (req, res) => {
    saveWord(req, res)
})

module.exports = router;