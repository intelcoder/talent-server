import { db } from 'App/index'
import Sequelize from 'sequelize'

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName:{
    type: Sequelize.STRING,
    allowNull: false,
  },
  fullName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  lastLogin: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  isAnonymous: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  } 
})