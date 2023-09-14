import express from "express";
import ErrorMiddleware from "./middlewares/error.js";
import UserRoute from "./routes/UserRoutes.js" 
import AdminRoute from "./routes/AdminRoutes.js"
import cookieParser from "cookie-parser"
import cors from "cors"
export const app = express()

app.use(express.json())
app.use(
    express.urlencoded({
        extended:true,
    })
)

app.use(cookieParser())
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true,
    methods:["GET","POST","PUT","DELETE"],
}))

app.use('/api/v1',UserRoute)
app.use('/api/v1',AdminRoute)

app.get("/",(req,res)=>{
    res.send("server is working")
})


app.use(ErrorMiddleware)