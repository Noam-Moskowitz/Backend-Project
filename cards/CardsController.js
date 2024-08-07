import { CardsService } from "./CardsServices.js";

export class CardController{
    static async getAllCards(req,res){

    }

    static async getCardsByUser(req,res){

    }

    static async getCardById(req,res){

    }

    static async addCard(req,res){
        const card = {
            ...req.body,
            
        }
        try {
            const newCard=await CardsService.addCard(req.body)
        } catch (error) {
            
        }

    }

    static async updateCard(req,res){

    }

    static async deleteCard(req,res){

    }

    static async likeCard(req,res){

    }

}