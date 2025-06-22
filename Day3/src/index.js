// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from './db/index.js';
import { app } from "./app.js";

dotenv.config({
    path: './env'
})

// directly load environment variable so changes in package.json
/**
 * "script" :
 *  "dev": "nodemon src/index.js"       // before 
 *  "dev": "nodemon -r dotenv/config --exprimental-json.modules src/index.js"   // after
 */

PORT = process.env.PORT
connectDB()
.then(
    app.on("error", () => {
        console.log("ERROR: ", error)
        throw error
    }),

    app.listen(PORT, ()=>{
        console.log(`Server is running on port: ${PORT}`)
        
    })
)
.catch((error)=>{
    console.log("MONGODB conncetion failed !!! ", error);
})




























/*
const app = express()
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

// function connnectDB(){}
// connnectDB()

// IIFE function immediately execute
;(async () => {
    try {
        await mongoose.connect(`${MONGODB_URI} / ${DB_NAME}`)
        app.on("error", () => {
            console.log("ERROR: ",error);
            throw error
        })

        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw error
    }
})()
*/

