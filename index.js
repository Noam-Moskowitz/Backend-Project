import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import appRoutes from './routers/mainRouter.js'
import dotenv from 'dotenv'
import morgan from 'morgan';
import chalk from 'chalk';
import moment from 'moment';
import { colorMethod } from './utils/chalkUtils.js';


dotenv.config()

const PORT=process.env.PORT

async function main(){
    await mongoose.connect(process.env.MONGO_DB_URL)
    console.log(`mongo connected on port 27017`);
    
}

main().catch(err=>console.log(err))

const app = express()

app.use(express.json())

app.use(morgan((tokens, req, res) => {
    const status = tokens.status(req, res);

    return [
        colorMethod(tokens.method(req, res)),
        chalk.green(tokens.url(req, res)),
        status >= 200 && status < 400 ? chalk.bgGreen(tokens.status(req, res)) : chalk.bgRed(tokens.status(req, res)),
        chalk.gray(moment().format("YYYY-MM-DD HH:mm")),
        chalk.bgBlack(tokens['response-time'](req, res), 'ms'),
    ].join(' ')
}));


app.use(cors({
    origin: true,
    credentials: true,
    methods: `GET,PUT,POST,DELETE`,
    allowedHeaders: `Content-Type, Accept, Authorization`
}))

app.listen(PORT, () => {
    console.log(`listeing on port ${PORT}`);
})
app.use(`/`,appRoutes)

app.get(`/`, (req, res) => {
    res.send(`welcome`)
})