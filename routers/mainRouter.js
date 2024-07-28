import express from 'express'
import cardRoutes from './cardsRouter'
import userRoutes from './usersRouter'

const router = express.Router()

router.use(`/cards`, cardRoutes)

router.use(`/users`, userRoutes)