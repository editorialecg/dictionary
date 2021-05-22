const { SaveWord, FindOneWord } = require('./model')
const { sendSaveWord } = require('./DTO')

module.exports = {

    async saveWord(req, res) {
        const { word, syn, ant } = req.body.body

        if (!word) return res.status(400).send()

        const findWord = await FindOneWord(word)

        if (findWord) return res.status(401).send()

        await SaveWord(word, syn, ant)

        const send = await sendSaveWord(word, syn, ant)

        return res.status(200).json({ send })

    },

    async findWord(req, res) {
        const word = req.params.word

        if (!word) return res.status(400).send()

        const findWord = await FindOneWord(word)

        if (!findWord) return res.status(404).send()

        const send = await sendSaveWord(findWord.word, findWord.synonymous, findWord.antonym)

        return res.status(200).json({ send })
    }


}