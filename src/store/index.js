import { configureStore } from '@reduxjs/toolkit'
import users from './slices/users'
import user from './slices/user'

export default configureStore({ reducer: { users, user } })
