import { Schema, model } from 'mongoose';

const blog = Schema({
    title: {
        type: String
    },
    content: {
        type: String,
        
    },
    img: {
        type: String
    },
    date: {
        type: String
    },
    signed: {
        type: String
    }
});

const Blog = model('blog', blog);

export default Blog