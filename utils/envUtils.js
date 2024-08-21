import chalk from 'chalk';
import mongoose from 'mongoose';

export const connect= async ()=>{
    const db=process.env.ENVIROMENT===`development`? process.env.MONGO_DB_URL: process.env.ATLAS_URI

    await mongoose.connect(db)
    console.log(chalk.blue(`mongo connected on port 27017`));
}