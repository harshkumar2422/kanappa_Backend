import jwt from "jsonwebtoken";


const sendToken = (user,res,statusCode,message)=>{
    statusCode = statusCode || 500;
    message = message || "Interval server Error"

    const token = jwt.sign({_id: user._id},process.env.SECRET_KEY)

    const options = {
        expires: new Date(Date.now()+ 15*24*60*60*1000),
        httpOnly: true,
        secure:true,
        sameSite:"none",
    }

    res.status(statusCode).cookie("token",token,options).json({
        success: true,
        message,
        token
    })
}
export default sendToken;

