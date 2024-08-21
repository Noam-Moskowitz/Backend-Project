import express from 'express'
import { checkCredentials } from '../users/usersMiddleware.js'
import { UserController } from '../users/UsersController.js'

const router = express.Router()

router.post(`/login`,checkCredentials, UserController.loginUser)

export default router
