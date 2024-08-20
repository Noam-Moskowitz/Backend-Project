import express from 'express'
import { UserController } from '../users/UsersController.js'
import { checkBizNumber, checkCredentials, checkIsAdmin, checkIsUserOrAdmin, validateToken, validateUpdatedUser, validateUser } from '../users/usersMiddleware.js'

const router = express.Router()

router.get(`/`,checkIsAdmin, UserController.getAllUsers)

router.get(`/:id`, checkIsUserOrAdmin, UserController.getUserById)

router.post(`/`,validateUser, UserController.addUser)

router.put(`/:id`,validateToken,checkIsUserOrAdmin, validateUpdatedUser, UserController.updateUser)

router.patch(`/:id`,checkIsUserOrAdmin, UserController.changeBusinessStatus)

router.delete(`/:id`,checkIsUserOrAdmin, UserController.deleteUser)

router.post(`/login`,checkCredentials, UserController.loginUser)

router.patch(`/bizNumber/:id`,checkIsAdmin,checkBizNumber, UserController.changeBizNumber)


export default router