import { Schema, model } from 'mongoose';

const wordSynAnt = Schema({
    word: {
        type: String
    },
    synonymous: {
        type: [String],
        
    },
    antonym: {
        type: [String],
        
    }

});

export default model('wordSynAnt', wordSynAnt);