import mongoose from "mongoose";

const schema = new mongoose.Schema({
  video: { type: String },
  title: { type: String },
  description: { type: String },
  videoType:{type:String},
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const videoScreen = mongoose.model("videoScreen", schema);
