import express from 'express'
import logger from 'morgan'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { apolloUploadExpress } from 'apollo-upload-server'
import schema from './schemas'
import db from './db'
import './registerModels'

require('dotenv').config()

const app = express()
app.use(logger())
app.use(bodyParser.json())
app.use(
 '/graphql',
 bodyParser.json(),
 apolloUploadExpress(),
 graphqlExpress({
  schema 
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

