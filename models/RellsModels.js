import mongoose from "mongoose";

const schema = new mongoose.Schema({
  Image: { type: String },
  video: { type: String },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Reels = mongoose.model("Reels", schema);
