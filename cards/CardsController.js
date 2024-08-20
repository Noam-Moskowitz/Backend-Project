import { CardsService } from "./CardsServices.js";
import jwt from "jsonwebtoken";

export class CardController{
    static async getAllCards(req,res){
        try {
            const allCards=await CardsService.getAllCards()

            res.send(allCards)
        } catch (error) {
            res.status(404).send({message:error})
        }
    }

    static async getCardsByUser(req,res){
        const token=jwt.decode(req.headers.authorization)
        
        try {
            const usersCards=await CardsService.getCardsByUser(token._id)

            res.send(usersCards)
        } catch (error) {
            res.status(404).send({message:error})
        }
    }

    static async getCardById(req,res){
        const {id}=req.params;
        
        try {
            const card=await CardsService.getCardById(id);

            if (!card){
                return res.status(404).send({message:`card not found!`})
            }

            res.send(card)
        } catch (error) {
            res.status(404).send({message:error})
        }
    }

    static async addCard(req,res){
        const user=jwt.decode(req.headers.authorization)
        
        const card = {
            ...req.body,
            likes:[],
            user_id:user._id,
            createdAt:new Date(),
            bizNumber:user.bizNumber
        }
        try {
            const newCard=await CardsService.addCard(card)

            res.send(newCard)
        } catch (error) {
            res.status(400).send({message:error})
        }

    }

    static async updateCard(req,res){
        const {id}=req.params;

        try {
            const updatedCard=await CardsService.updateCard(id,req.body)

            if (!updatedCard){
                return res.status(404).send({message:`card not found!`})
            }

            res.send(updatedCard)
        } catch (error) {
            res.status(400).send({message:error})
        }
    }

    static async likeCard(req,res){
        const {id}=req.params
        const user=jwt.decode(req.headers.authorization)

        try {
            const newCard=await CardsService.likeCard(id, user._id)

            if (!newCard) {
                return res.status(404).send({message:`card does not exist`})
            }

            res.send(newCard) 
        } catch (error) {
            res.status(404).send({message:error})
        }
    }

    static async deleteCard(req,res){
        const {id}=req.params

        try {
            const deletedCard=await CardsService.deleteCard(id)

            if (!deletedCard) {
                return res.status(404).send({message:`card does not exist`})
            }

            res.send(deletedCard);
        } catch (error) {
            res.status(404).send({message:error})
        }
    }

    

}