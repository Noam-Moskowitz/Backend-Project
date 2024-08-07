import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import appRoutes from './routers/mainRouter.js'
import dotenv from 'dotenv'
import morgan from 'morgan';

dotenv.config()

const PORT=process.env.PORT

async function main(){
    await mongoose.connect(process.env.MONGO_DB_URL)
    console.log(`mongo connected on port 27017`);
    
}

main().catch(err=>console.log(err))

const app = express()

app.use(express.json())

app.use(morgan(`:method :url :status :date[iso] :response-time ms`))


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