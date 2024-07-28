import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'


const app = express()

/* async function main(){
    await mongoose.connect(`mongodb://127.0.0.1:27017`)
} */

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

app.get(`/`, (req, res) => {
    res.send(`welcome`)
})