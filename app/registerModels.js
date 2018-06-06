import User from 'App/user/models'
import Tutor from 'App/user/tutor/models'
import Category from 'App/category/models'

// relations
User.sync()
Tutor.belongsTo(User)
Tutor.sync()

Category.sync()