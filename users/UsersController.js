import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserServices } from './UsersServices.js'
export class UserController{
    static async getAllUsers(req,res){
        try {
            const allUsers= await UserServices.getAllUsers()

            res.send(allUsers)
        } catch (error) {
            res.status(401).send({message:error})
        }
    }

    static async getUserById(req,res){
            const {id}=req.params
        try {
            const user= await UserServices.getUserById(id)

            res.send(user)
        } catch (error) {
            res.status(401).send({message:error})
        }
    }

    static async addUser(req,res){
        const user={
            ...req.body,
            isAdmin:false,
            createdAt:new Date(),
            password: await bcrypt.hash(req.body.password, 10)
        }

        try {
            const newUser=await UserServices.addUser(user)
            
            res.send(newUser)
        } catch (error) {
            res.status(401).send({message:error})
        }
    }

    static async updateUser(req,res){
        const {id}=req.params;
        const newUser=req.body;
        try {
            const updatedUser = await UserServices.updateUser(id, newUser)

            res.send(updatedUser)
        } catch (error) {
            res.status(401).send({message:error})
        }
    }

    static async changeBusinessStatus(req,res){
        const {id}=req.params;
        try {
            const updatedUser = await UserServices.changeUserBusinessStatus(id)

            res.send(updatedUser)
        } catch (error) {
            res.status(401).send({message:error})
        }
    }

    static async deleteUser(req,res){
        const {id}=req.params;
        try {
            const deletedUser = await UserServices.deleteUser(id)

            res.send(deletedUser)
        } catch (error) {
            res.status(401).send({message:error})
        }
    }

    static async loginUser(req,res){
        const {email,password}=req.body
        
        try {
            const user = await UserServices.loginUser({email,password})

            const token = jwt.sign({
                _id:user._id,
                first:user.name.first,
                last:user.name.last,
                isBusiness:user.isBusiness,
                isAdmin:user.isAdmin,
            }, process.env.JWT_SECRET, {expiresIn:`1hr`})


            res.send(token)
        } catch (error) {
            res.status(401).send({message:error})
        }
    }
}