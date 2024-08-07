import Joi from "joi";
import { model, Schema } from "mongoose";

const nameShcmea=new Schema({
    first:{
        type:String,
        required:true,
        minLength:1,
        maxLength:25
    },
    middle:{
        type:String,
        minLength:1,
        maxLength:25
    },
    last:{
        type:String,
        required:true,
        minLength:1,
        maxLength:25
    },
})

const imageSchema=new Schema({
    url:String,
    alt:String
})

const addressSchema=new Schema({
    state:{
        type:String,
        minLength:1,
        maxLength:30,
        default:'not defined'
    },
    country:{
        type:String,
        required:true,
        minLength:1,
        maxLength:30
    },
    city:{
        type:String,
        required:true,
        minLength:1,
        maxLength:30
    },
    street:{
        type:String,
        required:true,
        minLength:1,
        maxLength:30
    },
    houseNumber:{
        type:Number,
        required:true,
        min:1
    },
    zip:{
        type:String,
        minLength:1,
        maxLength:10,
        default:'0'
    },
})

const userSchema= new Schema({
    name:nameShcmea,
    phone:{
        type:String,
        required:true,
        minLength:7,
        maxLength:13
    },
    email:{
        type:String,
        required:true,
        minLength:5,
        maxLength:25
    },
    password:{
        type:String,
        required:true,
        minLength:7,
        maxLength:35
    },
    image:imageSchema,
    address:addressSchema,
    isAdmin:{
        type:Boolean,
        default:false,
        required:true
    },
    isBusiness:{
        type:Boolean,
        default:false,
        required:true
    },
    createdAt:{
        type:String,
        required:true
    }
})

export const UserModel=new model(`users`, userSchema);

const userImageValidation=Joi.object({
    first:Joi.string().min(1).max(25).required(),
    middle:Joi.string().min(1).max(25),
    last:Joi.string().min(1).max(25).required(),
})

const userAddressValidation=Joi.object({
    state:Joi.string().min(1).max(30),
    country:Joi.string().min(1).max(30).required(),
    city:Joi.string().min(1).max(30).required(),
    street:Joi.string().min(1).max(30).required(),
    houseNumber:Joi.number().min(1).required(),
    zip:Joi.string().min(1).max(10),
})

const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,35}$/;

export const userValidation=Joi.object({
    name:userImageValidation,
    phone:Joi.string().min(7).max(13).required(),
    email:Joi.string().email().min(5).max(25).required(),
    password:Joi.string().regex(passwordRegex),
    image:userImageValidation,
    address:userAddressValidation,
    isBusiness:Joi.boolean().required()
})