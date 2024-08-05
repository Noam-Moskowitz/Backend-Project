import { cardValidationSchema } from "../models/CardsModel";

export const validateCard=(req,res,next)=>{
    const card = req.body;

    const {error}=cardValidationSchema.validate(card);

    if (error) {
        return   res.status(401).send(error)
    }

    next()
}