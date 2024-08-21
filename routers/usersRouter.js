import express from 'express'
import { UserController } from '../users/UsersController.js'
import { checkBizNumber,  checkIsAdmin, checkIsUserOrAdmin, validateUpdatedUser, validateUser } from '../users/usersMiddleware.js'
import { validateToken } from '../token/tokenMiddleware.js'

const router = express.Router()

router.get(`/`,checkIsAdmin, UserController.getAllUsers)

router.get(`/:id`,checkIsUserOrAdmin, UserController.getUserById)

router.post(`/`,validateUser, UserController.addUser)

router.put(`/:id`,validateToken,checkIsUserOrAdmin, validateUpdatedUser, UserController.updateUser)

router.patch(`/:id`,checkIsUserOrAdmin, UserController.changeBusinessStatus)

router.delete(`/:id`,checkIsUserOrAdmin, UserController.deleteUser)

router.patch(`/bizNumber/:id`,checkIsAdmin,checkBizNumber, UserController.changeBizNumber)


export default router