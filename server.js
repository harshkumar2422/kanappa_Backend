import { app } from "./app.js";
import {config} from "dotenv";
import {connectDB} from "./database/database.js"

config({path:"./config.env"})

connectDB()


app.listen(process.env.PORT,()=>{
    console.log(`server id working at ${process.env.PORT}`)
})