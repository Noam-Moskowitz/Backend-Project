import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserServices } from './UsersServices.js'
import { generateBizNumber } from '../utils/userUtils.js'
export class UserController{
    static async getAllUsers(req,res){
        try {
            const allUsers= await UserServices.getAllUsers()

            res.send(allUsers)
        } catch (error) {
            res.status(404).send({message:error})
        }
    }

    static async getUserById(req,res){
            const {id}=req.params
        try {
            const user= await UserServices.getUserById(id)

            res.send(user)
        } catch (error) {
            res.status(404).send({message:error})
        }
    }

    static async addUser(req,res){
        const user={
            ...req.body,
            isAdmin:false,
            createdAt:new Date(),
            password: await bcrypt.hash(req.body.password, 10),
            bizNumber:req.body.isBusiness?generateBizNumber() :``
        }

        try {
            const newUser=await UserServices.addUser(user)
            
            res.send(newUser)
        } catch (error) {
            res.status(400).send({message:error})
        }
    }

    static async updateUser(req,res){
        const {id}=req.params;
        const newUser=req.body;
        try {
            const updatedUser = await UserServices.updateUser(id, newUser)
            if (!updatedUser) {
                return res.status(404).send({message:`cant find user with ${id}`})
            }

            res.send(updatedUser)
        } catch (error) {
            res.status(400).send({message:error})
        }
    }

    static async changeBusinessStatus(req,res){
        const {id}=req.params;
        try {
            const updatedUser = await UserServices.changeUserBusinessStatus(id)

            res.send(updatedUser)
        } catch (error) {
            res.status(404).send({message:error})
        }
    }

    static async deleteUser(req,res){
        const {id}=req.params;
        try {
            const deletedUser = await UserServices.deleteUser(id)

            res.send(deletedUser)
        } catch (error) {
            res.status(404).send({message:error})
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
                bizNumber:user.bizNumber||``
            }, process.env.JWT_SECRET, {expiresIn:`1hr`})


            res.send(token)
        } catch (error) {
            res.status(400).send({message:error})
        }
    }

    static async changeBizNumber(req,res){
        const {id}=req.params;
        const {bizNumber}=req.body;

        try {
            const user=await UserServices.changeBizNumber(bizNumber,id)
            if (!user) {
                return res.status(404).send({message:`could not find user!`})
            }
            
            res.send(user)
        } catch (error) {
            res.status(400).send({message:error})
        }
    }
}