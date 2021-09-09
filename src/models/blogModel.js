import { Schema, model } from 'mongoose';

const blog = Schema({
    title: {
        type: String
    },
    body: {
        type: String, 
    },
    img: {
        type: String
    },
    created_at: {
        type: String
    },
    signed: {
        type: String
    }
});

const Blog = model('blog', blog);

export default Blog