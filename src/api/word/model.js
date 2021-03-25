const { saveWord, findOneWord } = require('./DAO')

module.exports = {

    async SaveWord(word, syn, ant){
        return await saveWord(word,syn ,ant)
    },
    
    async FindOneWord(word){
        return await findOneWord(word)
    }
}

