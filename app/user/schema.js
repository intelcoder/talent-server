import { GraphQLScalarType } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'
import { Kind } from 'graphql/language'
import getTime from 'date-fns/get_time'
import parse from 'date-fns/parse'
import DateFns from 'date-fns'

import User from 'User/models'


const DateTime = new GraphQLScalarType({
  name: 'DateTime',
  description: 'Simple datetime',
  parseValue(value) {
    return parse(value) // value from the client
  },
  serialize(value) {
    return getTime(value); // value sent to the client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10); // ast value is always in string format
    }
    return null;
  },
})
export const typeDefs = `
  scalar DateTime
  type User {
    id: ID!,
    firstName: String!,
    lastName: String!,
    email: String,
    isActive: Boolean,
    lastLogin: DateTime,
    isAnonymous: Boolean,
  }


  type Query {
    user(id: ID!): User 
    users: [User]
  }

  type Mutation {
    createUser (
      firstName: String!,
      lastName: String!,
      email: String!,
      password: String!,
    ) : User
  }
  schema {
    query: Query,
    mutation: Mutation
  }

`

export const resolvers = {
  Query: {
    user: async (obj, args, context, info) => {
      const user = await User.findOne(args)
      return user
    },
    users: async () => {
      const users = await User.findAll()
      return users
    },
  },
  Mutation: {
    createUser: async (root, args) => {
      const user = await User.create(args)
      return user
    }
  },
}
export default makeExecutableSchema({
  typeDefs,
  resolvers,
})