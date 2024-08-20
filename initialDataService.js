import chalk from "chalk";
import { CardModel } from "./cards/CardsModel.js";
import { initialCards } from "./consts/initialCards.js";
import { initialUsers } from "./consts/initialUsers.js";
import { UserModel } from "./users/UsersModel.js";
import bcrypt from 'bcrypt'

export const setInitialData=async ()=>{
    const userAmount=await UserModel.find().countDocuments();
    
    if (userAmount) return

    const userIds=[];

    for (const u of initialUsers){
        const user= new UserModel(u);
        user.password=await bcrypt.hash(user.password,10);

        const obj=await UserModel.create(user)


        if (obj.isBusiness) {
            userIds.push(obj._id)
        }
    }

    for (const c of initialCards){
        const card=new CardModel(c)
        
        const i =Math.floor(Math.random()*userIds.length);
        card.user_id=userIds[i]

        const user=await UserModel.findById(userIds[i]);

        card.bizNumber=user.bizNumber;
        
        await card.save()
    }

    console.log(chalk.bgBlueBright(`Initial Data Created Succesfully`));
    
    
};

