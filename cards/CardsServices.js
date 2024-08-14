import { CardModel } from "../cards/CardsModel.js";

export class CardsService{
    static async getAllCards(){
        try {
            const allCards=await CardModel.find()

            return allCards
        } catch (error) {
            return error
        }
    }

    static async getCardsByUser(userId){
        try {
            const usersCards=await CardModel.find({user_id:userId})

            return usersCards
        } catch (error) {
            return error
        }
    }

    static async getCardById(cardId){
        try {
            const card=await CardModel.findById(cardId)

            return card
        } catch (error) {
            return error
        }
    }
    static async addCard(card){
        try {
            const newCard=await CardModel.create(card)
        
            return newCard  
        } catch (error) {
            return error
        } 
    }
}