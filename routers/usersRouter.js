import express from 'express'

const router = express.Router()

router.get(`/`)

router.get(`/:id`)

router.post(`/`)

router.post(`/login`)

router.put(`/:id`)

router.patch(`/:id`)

router.delete(`/:id`)

export default router