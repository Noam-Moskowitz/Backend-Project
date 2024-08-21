import express from 'express'
import cardRoutes from './cardsRouter.js'
import userRoutes from './usersRouter.js'
import authRoutes from './authRouter.js'
import { validateToken } from '../token/tokenMiddleware.js'

const router = express.Router()

router.use(`/cards`, cardRoutes)

router.use(`/users`,validateToken, userRoutes)

router.use(`/auth`,authRoutes)

export default router