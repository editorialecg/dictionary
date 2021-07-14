import express, { urlencoded, json } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import Blog from './models/blogModel'
import Dict from './models/wordModel'
import schema from './graph/schema'
import resolvers from './graph/resolvers'
const app = express();
require('dotenv').config();

// Middleware
app.use(morgan('dev'));
app.use(urlencoded({
    extended: true
}));
app.use(json());
app.use(cors({
	origin: '*'
}))
// db
const db = require('./db/db');


app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: resolvers,
	context: {
		Dict,
		Blog,
	},
	graphiql: true,
}));

export default app

