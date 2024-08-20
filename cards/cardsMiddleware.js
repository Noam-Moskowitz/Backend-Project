import { cardValidationSchema } from "../cards/CardsModel.js";

export const validateCard=(req,res,next)=>{
    const card = req.body;

    const {error}=cardValidationSchema.validate(card);

    if (error) {
        return   res.status(400).send(error)
    }

    next()
}