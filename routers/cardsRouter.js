import express from 'express'
import { validateCard } from '../cards/cardsMiddleware.js'
import { CardController } from '../cards/CardsController.js'
import { checkIsBusinessOrAdmin, checkIsUserOrAdmin, validateToken } from '../users/usersMiddleware.js'

const router = express.Router()

router.get(`/`, CardController.getAllCards)

router.get(`/my-cards`,CardController.getCardsByUser)

router.get(`/:id`, CardController.getCardById)

router.post(`/` ,validateToken,checkIsBusinessOrAdmin,validateCard, CardController.addCard)

router.put(`/:id`,validateToken,checkIsUserOrAdmin,validateCard, CardController.updateCard)

router.patch(`/:id`,validateToken,checkIsBusinessOrAdmin, CardController.likeCard)

router.delete(`/:id`,validateToken,checkIsUserOrAdmin,CardController.deleteCard) 

export default router