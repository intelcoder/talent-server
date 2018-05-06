import express from 'express'
import logger from 'morgan'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import schema from './schemas'
import db from './db'
import './registerModels'

require('dotenv').config()

const app = express()
app.use(logger('combined'))
app.use(bodyParser.json())
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
// app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema 
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

