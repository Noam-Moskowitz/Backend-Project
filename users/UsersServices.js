import { UserModel } from "./UsersModel.js";


export class UserServices{
    static async getAllUsers(){
        try {
            const allUsers= await UserModel.find()

            return allUsers
        } catch (error) {
            return error
        }
    }

    static async getUserById(id){
        try {
            const user= await UserModel.findById(id)

            return user
        } catch (error) {
            return error
        }
    }

    static async addUser(user){
        try {
            const newUser=await UserModel.create(user);
            
            return newUser
        } catch (error) {
            return error
        }
    }

    static async updateUser(id, newUser){
        try {
            const updatedUser = await UserModel.findByIdAndUpdate(id, newUser, { new: true });
            
            return updatedUser
        } catch (error) {
            return error
        }
    }

    static async changeUserBusinessStatus(id){
        try {
            const user=await UserModel.findById(id)

            user.isBusiness=!user.isBusiness

            const updatedUser = await UserModel.findByIdAndUpdate(id, user, { new: true });
            
            return updatedUser
        } catch (error) {
            return error
        }
    }

    static async deleteUser(id){
        try {
            const deletedUser=await UserModel.findByIdAndDelete(id)

            return deletedUser
        } catch (error) {
            return error
        }
    }

    static async loginUser(credentials){

        const {email, password}=credentials
        
        try {
            const user= await UserModel.findOne({email:email})              
                
            return user 

        } catch (error) {
            
            return error
        }
    }
}