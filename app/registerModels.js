import User from 'App/user/models'
import Tutor from 'App/user/tutor/models'


User.sync()
Tutor.belongsTo(User)
Tutor.sync()