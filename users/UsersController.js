import bcrypt from 'bcrypt'
import { UserServices } from './UsersServices.js'
export class UserController{
    static async addUser(req,res){
        const user={
            ...req.body,
            isAdmin:false,
            createdAt:new Date(),
            password:await bcrypt.hash(req.body.password, 10,(error)=>console.log(error))
        }
        try {
            const newUser=await UserServices.addUser(user)
            
            res.send(newUser)
        } catch (error) {
            res.status(401).send({message:error})
        }
    }
}