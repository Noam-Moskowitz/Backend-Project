import { CardModel } from "../cards/CardsModel.js";

export class CardsService{
    static async addCard(card){
        try {
            const newCard=await CardModel.create(card)
        
            return newCard  
        } catch (error) {
            return error
        } 
    }
}