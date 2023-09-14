import { User } from "../models/UserModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import bcrypt from "bcrypt";
import sendToken from "../utils/sendToken.js";

export const registration = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return next(new ErrorHandler("please enter all fields ", 400));
    let user = await User.findOne({ email });
    if (user) return next(new ErrorHandler("User already exist", 404));
    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({ name, email, password: hashedPassword });
    sendToken(user, res, 201, "user created successfully");
  } catch (error) {
    console.log(error);
  }
};

export const login= async(req,res,next)=>{
  try {
    const { email , password} = req.body;
    if(!email || !password)return next(new ErrorHandler("please enter all fields",400))
    let user = await User.findOne({email}).select("+password")
    if(!user) return next(new ErrorHandler("User doesn't exist",400))
    const compare = await bcrypt.compare( password ,user.password)
    if(!compare)return next(new ErrorHandler("Email or Pasword are wrong",400))
    sendToken(user,res,200,`Welcome back ${user.name}`)
  } catch (error) {
    console.log(error)
  }
}

export const logout = async (req,res,next)=>{
  res.status(200).cookie("token",null,{
    expires : new Date(Date.now()),
    httpOnly:true,
    secure:true,
    sameSite:"none",
  }).json({
    success:true,
    message:"user logout successfully"
  })
}

export const getallUser= async(req,res,next)=>{
  try {
    const user = await User.find()
    res.status(200).json({
      success:true,
      user
    })
  } catch (error) {
    console.log(error)
  }
}