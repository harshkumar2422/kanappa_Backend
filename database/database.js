import mongoose from "mongoose";

export const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("now database is connected")
    }).catch((error)=>{
        console.log(error);
    })
}
