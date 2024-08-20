import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import appRoutes from './routers/mainRouter.js'
import dotenv from 'dotenv'
import morgan from 'morgan';
import chalk from 'chalk';
import moment from 'moment';
import { colorMethod } from './utils/chalkUtils.js';
import { setInitialData } from './initialDataService.js';


dotenv.config()

const PORT=process.env.PORT

async function main(){
    await mongoose.connect(process.env.MONGO_DB_URL)
    console.log(`mongo connected on port 27017`);
}

main().catch(err=>console.log(err))

const app = express()

app.use(express.json())

setInitialData()

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

app.use(express.static("public"));

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


app.get(`*`,(req,res)=>{
     res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(`<meta charset="UTF-8">`);
        res.write(`
            <style>
                * {
                    text-align: center;
                    color: red;
                }
            </style>
        `);
        res.write("<h1>ERROR 404</h1>");
        res.write("<h2>The route you are trying to reach does not exist!</h2>");
        res.end();
    });