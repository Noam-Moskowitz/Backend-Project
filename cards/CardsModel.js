import Joi from "joi";
import { Schema , SchemaType, model} from "mongoose";

const imageSchema = new Schema({
    url: {
        type: String,
        required: true,
        minlength: 7
    },
    alt: {
        type: String,
        required: false
    }
})


const addressSchema = new Schema({
    state: {
        type: String,
        required: false,
        minlength: 1
    },
    country: {
        type: String,
        required: true,
        minlength: 1
    },
    city: {
        type: String,
        required: true,
        minlength: 1
    },
    street: {
        type: String,
        required: true,
        minlength: 1
    },
    houseNumber: {
        type: Number,
        required: true,
        min: 1
    },
    zip: {
        type: String,
        required: true,
        minlength: 1
    },
})


const cardSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 1
    },
    subtitle: {
        type: String,
        required: true,
        minlength: 1
    },
    description: {
        type: String,
        required: true,
        minlength: 1
    },
    phone: {
        type: String,
        required: true,
        minlength: 7
    },
    email: {
        type: String,
        required: true,
        minlength: 6
    },
    web: {
        type: String,
        required: true,
        minlength: 7
    },
    image: imageSchema,
    address: addressSchema,
    bizNumber:{
        type:Number,
        required:true,
        min:7,
    },
    likes:{
        type:[String],
        required:true
    },
    user_id:{
        type:Schema.Types.ObjectId,
        required:true,
    },
    createdAt:{
        type:String,
        required:true
    }
})

export const CardModel= new model(`cards`,cardSchema);

 const cardImageValidationSchema = Joi.object({
    url:Joi.string().uri().min(7),
    alt:Joi.string().min(1)
})

const cardAddressValidationSchema=Joi.object({
    state:Joi.string().min(1),
    country:Joi.string().min(1).required(),
    city:Joi.string().min(1).required(),
    street:Joi.string().min(1).required(),
    houseNumber:Joi.number().min(1).required(),
    zip:Joi.string().min(1).required(),
})

export const cardValidationSchema=Joi.object({
    title:Joi.string().min(1).required(),
    subtitle:Joi.string().min(1).required(),
    description:Joi.string().min(1).required(),
    phone:Joi.string().min(7).required(),
    email:Joi.string().email().min(6).required(),
    web:Joi.string().uri().min(7).required(),
    image: cardImageValidationSchema,
    address:cardAddressValidationSchema,
})

