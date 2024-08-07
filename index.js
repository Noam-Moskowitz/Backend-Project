import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import appRoutes from './routers/mainRouter.js'

async function main(){
    await mongoose.connect(`mongodb://127.0.0.1:27017/backend-project`)
    console.log(`mongo connected on port 27017`);
    
}

main().catch(err=>console.log(err))

const app = express()

app.use(express.json())

app.use(cors({
    origin: true,
    credentials: true,
    methods: `GET,PUT,POST,DELETE`,
    allowedHeaders: `Content-Type, Accept, Authorization`
}))

app.listen(`4040`, () => {
    console.log(`listeing on port 4040`);
})
app.use(`/`,appRoutes)

app.get(`/`, (req, res) => {
    res.send(`welcome`)
})