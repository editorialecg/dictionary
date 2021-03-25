const mongoose = require('mongoose');

const wordSynAnt = mongoose.Schema({
    word: {
        type: String
    },
    synonymous: {
        type: [String],
        default: []
    },
    antonym: {
        type: [String],
        default: []
    }

});

module.exports = mongoose.model('wordSynAnt', wordSynAnt);