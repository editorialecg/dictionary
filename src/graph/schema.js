import { buildSchema } from 'graphql'

export default buildSchema(`

    type Query{
        onePost(title: String!): Post!
        allPost: [Post!]!
    }

    type Mutation{
        newPost(title: String!, body: String!, img: String! signed: String!): Post!
    }

    type Post{
        img: String!
        title: String!
        body: String!
        signed: String!
        created_at: String!
    }

`)