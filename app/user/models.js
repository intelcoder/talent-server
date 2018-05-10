import bCrypt from 'bcrypt'
import Sequelize from 'sequelize'
import XRegExp from 'xregexp'
import 'Scripts/xregexp-all'
import db from 'App/db'

const nameRegex = XRegExp('^[\\p{L} \'.-]+$');
const nameValidation = (value, next) => {
  const isValid = XRegExp.exec(value, nameRegex)
  if(!isValid) return next("Name validation fail")
  next()
}
const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: nameValidation,
    },
  },
  lastName:{
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      is: nameValidation,
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
  roles: {
    type: Sequelize.STRING,
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

User.beforeCreate(async (user, options) => {
  try {
   const hash = await bCrypt.hashSync(user.password, bCrypt.genSaltSync(8))
   user.password = hash;
   return user
  } catch(e) {
    console.log(e)
    return e
  }
});


export default User
