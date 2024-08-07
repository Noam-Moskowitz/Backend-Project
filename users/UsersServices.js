import { UserModel } from "./UsersModel.js";

export class UserServices{
    static async addUser(user){
        try {
            const newUser=await UserModel.create(user);
            
            return newUser
        } catch (error) {
            return error
        }
    }
}