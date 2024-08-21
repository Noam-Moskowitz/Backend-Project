import { UserModel, userValidation } from "./UsersModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { decodeToken } from "../token/tokenMiddleware.js";

export const checkCredentials=async (req,res,next)=>{
    const {email,password}=req.body;

    const user = await UserModel.findOne({email:email})

    
            if (!user || !await bcrypt.compare(password, user.password)) {
                res.status(401).send({message:`email or password is incorrect!`})
            }else{
                next()
            }  
}

export const checkIsBusinessOrAdmin= async (req,res,next)=>{
    const token =req.headers.authorization

    if (!token) {
       return res.status(401).send({message:`User is not authorized`})
    }

    const user=decodeToken(token)

    if (user.isBusiness||user.isAdmin){
        next()
    }else{
        res.status(401).send({message:`User is not authorized`})
    }
}
export const checkIsAdmin= async (req,res,next)=>{
    const token =req.headers.authorization

    if (!token) {
       return res.status(401).send({message:`User is not authorized`})
    }

    const user=decodeToken(token)
    

    if (user.isAdmin){
        next()
    }else{
        res.status(401).send({message:`User is not authorized`})
    }
}

export const checkIsUserOrAdmin= async (req,res,next)=>{
    const token =req.headers.authorization
    

    if (!token) {
       return res.status(401).send({message:`User is not authorized`})
    }

 
    const user=decodeToken(token)

    const existingUser= await UserModel.findById(user._id)

    if (existingUser||user.isAdmin){
        next()
    }else{
        res.status(401).send({message:`User is not authorized`})
    }
}

export const validateUser= async(req,res,next)=>{
    const {error}=userValidation.validate(req.body)

    const existingEmail = await UserModel.findOne({email:req.body.email})

    if (existingEmail) {
        return res.status(400).send({message:`email already in use!`})
    }

    if (error) {
        return res.status(400).send({message:error})
    }

    next()
}

export const validateUpdatedUser= async(req,res,next)=>{
    const {error}=userValidation.validate(req.body)

    if (error) {
        return res.status(400).send({message:error})
    }

    next()
    
}

export const checkBizNumber= async(req,res,next)=>{
    const {bizNumber}=req.body

    if (!bizNumber) return res.status(400).send({message:`bizNumber is required!`})

    const bizNumberExists=await UserModel.findOne({bizNumber:bizNumber})

    if (bizNumberExists) {
        return res.status(400).send({message:`bizNumber already in use!`})
    }

    next()
    
}