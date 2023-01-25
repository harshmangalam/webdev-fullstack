import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    posterUrl: {
      type: String,
    },

    description: {
      type: String,
      maxLength: [130, "Post description must be lesser than 130 characters"],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);
