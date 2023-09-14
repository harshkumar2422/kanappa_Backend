import mongoose from "mongoose";
import validator from "validator";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
      },
      email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: validator.isEmail,
      },
      password: {
        type: String,
        required: [true, "Please enter your password"],
        minLength: [6, "password must be atleas 6 character"],
        select: false,
      },
      role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
});

export const User = mongoose.model("User", schema);