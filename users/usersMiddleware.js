import { UserModel, userValidation } from "./UsersModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const checkCredentials=async (req,res,next)=>{
    const {email,password}=req.body;

    const user = await UserModel.findOne({email:email})

    
            if (!user || !await bcrypt.compare(password, user.password)) {
                res.status(403).send({message:`email or password is incorrect!`})
            }else{
                next()
            }  
}

export const checkIsBusinessOrAdmin= async (req,res,next)=>{
    const token =req.headers.authorization

    if (!token) {
        res.status(401).send({message:`User is not authorized`})
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
        res.status(401).send({message:`User is not authorized`})
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
        res.status(401).send({message:`User is not authorized`})
    }

    const user=decodeToken(token)
    
    const existingUser= await UserModel.findById(user._id)

    if (existingUser||user.isAdmin){
        next()
    }else{
        res.status(401).send({message:`User is not authorized`})
    }
}


const decodeToken=(token)=>{
    const decodedToken= jwt.decode(token, process.env.JWT_SECRET)

    if (!decodeToken) {
        return null
    }

    return decodedToken
}

export const validateUser= async(req,res,next)=>{
    const {error}=userValidation.validate(req.body)

    const existingEmail = await UserModel.findOne({email:req.body.email})

    if (existingEmail) {
        return res.status(403).send({message:`email already in use!`})
    }

    if (error) {
        return res.status(403).send({message:error})
    }

    
    next()
    
}