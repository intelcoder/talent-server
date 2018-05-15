import { GraphQLScalarType } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'
import { Kind } from 'graphql/language'
import getTime from 'date-fns/get_time'
import parse from 'date-fns/parse'
import DateFns from 'date-fns'
import { GraphQLUpload } from 'apollo-upload-server'

import Tutor from './models'
import User from '../models'


const typeDefs = `
  scalar Upload
  type Tutor {
    displayName: String!,
    briefIntro: String!,
    resume: Upload,
    isVerified: Boolean,
  }
  type Query {
    tutor(id: ID!): Tutor,
    tutors: [Tutor],
    tutorsByIds: [String!],
  }
  type Mutation {
    createTutor (
      userId: ID!,
      displayName: String!,
      briefIntro: String!,
    ): Tutor,
    uploadResume (
      resume: Upload
    ) : Tutor,
  }
  type schema {
    query: Query,
    mutation: Mutation
  }
`

const resolvers = {
  Query: {
    tutor: async (obj, args, context, info) => {
      const tutor = await Tutor.findOne(args)
      if(tutor) return tutor
      return new Error(`Tutor ${id} not found`)
    },
    tutors: async (obj, args, context, info) => {
      const tutors = await Tutor.findAll()
      if(tutors) return tutor
      return new Error('Tutors Not found')
    },
    tutorsByIds: async (obj, args, context, info) => {
      const tutors = await Tutor.findAll(args)

      if(tutors) return tutor
      return new Error('No tutor matches with provided ids')
    }
  },
  Mutation: {
    createTutor: async (root, args) => {
      const user = await User.findOne(args.id)
      if(user) {
        const tutor = await Tutor.create({
          displayName: args.displayName,
          briefIntro: args.briefIntro,
          resume: 'setset'
        })
        const result = await tutor.setUser(user)
        return result
      }
    }
  }
}

export default makeExecutableSchema({
  typeDefs,
  resolvers,
})