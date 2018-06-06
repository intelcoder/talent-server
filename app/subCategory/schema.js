
import SubCategory from './models'
const typeDefs = `
  type SubCategory {
    id: ID!,
    name: String,
  }
  type Query {
    subCategory(id: ID!): SubCategory,
    subCategories: [SubCategory],
  }

`

const resolvers = {
  subCategory: async (obj, args) => {
    const subCategory = await SubCategory.fineOne(args)
    return subCategory
  },
  subCategories: async (obj, args) => {
    const subCategories = await SubCategory.fineAll()
    return subCategories
  }
}