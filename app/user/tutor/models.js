import Sequalize from 'sequelize'
import db from 'App/db'
import User from 'App/User/models'

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
Tutor.sync()
Tutor.belongsTo(User)

export default Tutor