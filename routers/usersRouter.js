import express from 'express'
import { UserController } from '../users/UsersController.js'
import { checkBizNumber,  checkIsAdmin, checkIsUserOrAdmin, validateUpdatedUser, validateUser } from '../users/usersMiddleware.js'
import { validateToken } from '../token/tokenMiddleware.js'

const router = express.Router()

router.get(`/`,validateToken,checkIsAdmin, UserController.getAllUsers)

router.get(`/:id`,validateToken,checkIsUserOrAdmin, UserController.getUserById)

router.post(`/`,validateUser, UserController.addUser)

router.put(`/:id`,validateToken,validateToken,checkIsUserOrAdmin, validateUpdatedUser, UserController.updateUser)

router.patch(`/:id`,validateToken,checkIsUserOrAdmin, UserController.changeBusinessStatus)

router.delete(`/:id`,validateToken,checkIsUserOrAdmin, UserController.deleteUser)

router.patch(`/bizNumber/:id`,validateToken,checkIsAdmin,checkBizNumber, UserController.changeBizNumber)


export default router