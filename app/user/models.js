import { db } from 'App/index'
import Sequelize from 'sequelize'

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: ["^[a-zA-Z]+(([',. -][a-zA-Z\s])?[a-zA-Z]*)*$",'i'],
    },
  },
  lastName:{
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: ["^[a-zA-Z]+(([',. -][a-zA-Z\s])?[a-zA-Z]*)*$",'i'], 
    },
  },
  password: {
    type: Sequelize.STRING(255),
    allowNull: false,
    validate: {
      len: [8, 255],
    },
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
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
  },
},
{
  getterMethods: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    }
  }
})
