import mongoose from "mongoose";

const schema = new mongoose.Schema({
  Image: { type: String },
  title: { type: String },
  description: { type: String },
  createdBy:{
    type:String
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const FantasyP = mongoose.model("FantasyP", schema);
