const wordSchema = require('../../models/wordModel')

module.exports = {

    saveWord(word, syn, ant) {
        return new Promise((resolve, reject) => wordSchema.create({
            word: word,
            synonymous: syn,
            antonym: ant
        }, (err, data) => {
            if (err) return reject(err)
            resolve(data)
        }))
    },
    
    findOneWord(word) {
        return new Promise((resolve, reject) => wordSchema.findOne({ word: word }, (err, data) => {
            if (err) return reject(err)
            resolve(data)
        }))
    }
}