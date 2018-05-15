import User from 'App/user/models'
import Tutor from 'App/user/tutor/models'

// relations
User.sync()
Tutor.belongsTo(User)
Tutor.sync()