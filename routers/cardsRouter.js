import express from 'express'
import { validateCard } from '../middleware/cardsMiddleware'
import { CardController } from '../controllers/CardsController'

const router = express.Router()

router.get(`/`, CardController.getAllCards)

router.get(`/my-cards`,CardController.getCardsByUser)

router.get(`/:id`, CardController.getCardById)

router.post(`/`,validateCard, CardController.addCard)

router.put(`/:id`,validateCard, CardController.updateCard)

router.patch(`/:id`, CardController.likeCard)

router.delete(`/:id`,CardController.deleteCard)

export default router