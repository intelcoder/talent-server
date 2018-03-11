import Sequelize from 'sequelize'
require('dotenv').config()
export const db = new Sequelize('postgres', 'postgres', 'fiddler', {
  host: process.env.POSTGRES_HOST,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
})

db
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:');
})

export default db