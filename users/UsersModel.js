import Joi from "joi";
import { Schema } from "mongoose";

const nameShcmea=new Schema({
    first:{
        type:String,
        required:true,
        minLength:1,
        maxLength:25
    },
    middle:String,
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
        required:false,
        minLength:1,
        maxLength:10
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
    }
})