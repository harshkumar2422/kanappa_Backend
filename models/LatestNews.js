import mongoose from "mongoose";

const schema = new mongoose.Schema({
  Image: { type: String },
  title: { type: String },
  description: { type: String },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const LatestNews = mongoose.model("LatestNews", schema);
