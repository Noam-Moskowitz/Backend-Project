import { CardModel } from "../cards/CardsModel.js";

export class CardsService{
    static async getAllCards(){
        try {
            const allCards=await CardModel.find()

            return allCards
        } catch (error) {
            throw error
        }
    }

    static async getCardsByUser(userId){
        try {
            const usersCards=await CardModel.find({user_id:userId})

            return usersCards
        } catch (error) {
            throw error
        }
    }

    static async getCardById(cardId){
        try {
            const card=await CardModel.findById(cardId)

            return card
        } catch (error) {
            throw error
        }
    }

    static async addCard(card){
        try {
            const newCard=await CardModel.create(card)
        
            return newCard  
        } catch (error) {
            throw error
        } 
    }

    static async updateCard(cardId,card){
        try {
            const updatedCard=await CardModel.findByIdAndUpdate(cardId, card, {new:true})
        
            return updatedCard  
        } catch (error) {
            throw error
        } 
    }

    static async likeCard(cardId, userId){
        try {
            const card=await CardModel.findById(cardId)

        if (!card) {
            return null
        }

        const cardIsLiked=card.likes.includes(userId)
        let likesArray;

        if (cardIsLiked) {
            likesArray=card.likes.filter(user=>user!==userId)
        }else{
            likesArray=[...card.likes, userId]
        }

        card.likes=likesArray;

        const newCard=await CardModel.findByIdAndUpdate(cardId, card);
        
        return newCard

        } catch (error) {
            throw error
        }
        
    }

    static async deleteCard(cardId){
        try {
            const deletedCard=await CardModel.findByIdAndDelete(cardId);

            return deletedCard
        } catch (error) {
            throw error
        }
    }
}