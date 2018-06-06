import Sequalize  from 'sequelize'
import db from 'App/db'

const Category = db.define('category', {
  name: {
    type: Sequalize.STRING(50),
    allowNull: false,
    unique: true,
  }
})


export default Category