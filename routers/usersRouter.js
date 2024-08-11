import express from 'express'
import { UserController } from '../users/UsersController.js'
import { checkCredentials, checkIsAdmin, checkIsUserOrAdmin, validateUser } from '../users/usersMiddleware.js'

const router = express.Router()

router.get(`/`,checkIsAdmin, UserController.getAllUsers)

router.get(`/:id`, checkIsUserOrAdmin, UserController.getUserById)

router.post(`/`,validateUser, UserController.addUser)

router.put(`/:id`,checkIsUserOrAdmin, validateUser, UserController.updateUser)

router.patch(`/:id`,checkIsUserOrAdmin, UserController.changeBusinessStatus)

router.delete(`/:id`,checkIsUserOrAdmin, UserController.deleteUser)

router.post(`/login`,checkCredentials, UserController.loginUser)


export default router