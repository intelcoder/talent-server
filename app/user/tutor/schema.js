import { GraphQLScalarType } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'
import { Kind } from 'graphql/language'
import getTime from 'date-fns/get_time'
import parse from 'date-fns/parse'
import DateFns from 'date-fns'

import Tutor from './models'

