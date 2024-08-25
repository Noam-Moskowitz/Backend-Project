import express from 'express'
import cardRoutes from './cardsRouter.js'
import userRoutes from './usersRouter.js'
import authRoutes from './authRouter.js'

const router = express.Router()

router.use(`/cards`, cardRoutes)

router.use(`/users`, userRoutes)

router.use(`/auth`,authRoutes)

export default router