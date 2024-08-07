import express from 'express'
import { UserController } from '../users/UsersController.js'

const router = express.Router()

router.get(`/`)

router.get(`/:id`)

router.post(`/`, UserController.addUser)

router.post(`/login`)

router.put(`/:id`)

router.patch(`/:id`)

router.delete(`/:id`)

export default router