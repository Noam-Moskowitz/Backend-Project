import { generateBizNumber } from "../utils/userUtils.js";
import { UserModel } from "./UsersModel.js";


export class UserServices{
    static async getAllUsers(){
        try {
            const allUsers= await UserModel.find()

            return allUsers
        } catch (error) {
            throw error
        }
    }

    static async getUserById(id){
        try {
            const user= await UserModel.findById(id)

            return user
        } catch (error) {
            throw error
        }
    }

    static async addUser(user){
        try {
            const newUser=await UserModel.create(user);
            
            return newUser
        } catch (error) {
            throw error
        }
    }

    static async updateUser(id, newUser){
        try {
            const updatedUser = await UserModel.findByIdAndUpdate(id, newUser, { new: true });
            
            return updatedUser
        } catch (error) {
            throw error
        }
    }

    static async changeUserBusinessStatus(id){
        try {
            const user=await UserModel.findById(id)
            if (!user.isBusiness && !user.bizNumber) {
                user.bizNumber=generateBizNumber()
            }

            user.isBusiness=!user.isBusiness

            const updatedUser = await UserModel.findByIdAndUpdate(id, user, { new: true });
            
            return updatedUser
        } catch (error) {
            throw error
        }
    }

    static async deleteUser(id){
        try {
            const deletedUser=await UserModel.findByIdAndDelete(id)

            return deletedUser
        } catch (error) {
            throw error
        }
    }

    static async loginUser(credentials){

        const {email}=credentials
        
        try {
            const user= await UserModel.findOne({email:email})              
                
            return user 

        } catch (error) {
            
            throw error
        }
    }

    static async changeBizNumber(newBizNumber,id){
        try {
            const user=await UserModel.findByIdAndUpdate(
                id,
                {bizNumber:newBizNumber},
                { new: true}
            )

            return user
        } catch (error) {
            throw error
        }
    }
}