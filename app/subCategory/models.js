import Sequalize from 'sequelize'
import db from 'App/db'

const SubCategory = db.define('subCategory', {
  name: {
    type: Sequalize.STRING,
    unique: true,
    allowNull: false,
  }
})


export default SubCategory