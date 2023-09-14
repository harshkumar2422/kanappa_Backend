import jwt from "jsonwebtoken";
import { User } from "../models/UserModel.js";
import ErrorHandler from "../utils/errorHandler.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;

  if (!token) return next(new ErrorHandler("first login", 401));

  const decoded = jwt.verify(token, process.env.SECRET_KEY);

  req.user = await User.findById(decoded._id);

  next();
  } catch (error) {
    console.log("Internal server error", error)
  }
};

export const authorizadmin = (req, res, next) => {
  if (req.user.role !== "admin")
    return next(
      new ErrorHandler(
        `${req.user.role} is not allowed to access this resource`,
        403
      )
    );
    next();

};