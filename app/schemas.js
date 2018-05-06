import {
  mergeSchemas,
} from 'graphql-tools'

import userShcema from './user/schema'

export default mergeSchemas({
  schemas: [
    userShcema,
  ],
})