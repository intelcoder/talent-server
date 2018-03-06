import express from 'express'
import logger from 'morgan'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import Sequelize from 'sequelize'
require('dotenv').config()

const sequelize = new Sequelize('postgres', 'postgres', 'fiddler', {
  host: process.env.POSTGRES_HOST,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
})

sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});



const app = express()
app.use(logger('combined'))
app.use(bodyParser.json())
// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
// app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});