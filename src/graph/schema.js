import { buildSchema } from 'graphql'

export default buildSchema(`

    type Query{
        findPost(title: String!): Post!
    }

    type Mutation{
        newPost(title: String!, body: String!, img: String! signed: String!): Post!
    }

    type Post{
        title: String!
        body: String!
        img: String!
        signed: String!
        created_at: String!
    }

`
)