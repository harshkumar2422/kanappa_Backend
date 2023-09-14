import mongoose from "mongoose";

const schema = new mongoose.Schema({
  Image: { type: String },
  type: {
    type: String,
    enum: ["AD", "BANNER"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Banner = mongoose.model("Banner", schema);
