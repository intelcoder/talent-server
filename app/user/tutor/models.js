import Sequalize from 'sequelize'
import db from 'App/db'

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
  },
  isVerified: {
    type: Sequalize.BOOLEAN,
    defaultValue: false,
  },
})



export default Tutor