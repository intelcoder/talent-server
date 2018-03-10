import Sequalize from 'sequelize'
import { db } from 'App'
import User from 'App/User'

const Tutor = db.define('tutor', {
  displayName: {
    type: Sequalize.STRING(20),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  briefIntro: {
    type: Sequalize.TEXT,
    allowNull: false,
    defaultValue: ''
  },
  resume: {
    type: Sequalize.BLOB,
    allowNull: false,
  },
  isVerified: {
    type: Sequalize.BOOLEAN,
    defaultValue: false,
  },
})

Tutor.belongsTo(User)

export default Tutor