import express from 'express'
import cardRoutes from './cardsRouter.js'
import userRoutes from './usersRouter.js'

const router = express.Router()

router.use(`/cards`, cardRoutes)

router.use(`/users`, userRoutes)

export default router