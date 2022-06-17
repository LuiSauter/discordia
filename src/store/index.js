import { configureStore } from '@reduxjs/toolkit'
import users from './slices/users'
import user from './slices/user'
import channel from './slices/channel'

export default configureStore({ reducer: { users, user, channel } })
