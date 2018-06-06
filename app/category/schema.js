import { makeExecutableSchema } from 'graphql-tools'
import Category from './model'
const typeDef = `
  type Category {
    id: ID!,
    name: String,
  }
  
  type Query {
    category(id: ID!): Category,
    categories: [Category]
  }
`

const resolvers = () => {
  category: async (obj, args) => {
    const category = await Category.findOne(args)
    return category
  },
  categories: async (obj, args) => {
    const categories = await Category.findAll()
    return categories
  }
}

