import {
  mergeSchemas,
} from 'graphql-tools'

import userSchema from './user/schema'
import tutorSchema from './user/tutor/schema'

export default mergeSchemas({
  schemas: [
    userSchema,
    tutorSchema,
  ],
})