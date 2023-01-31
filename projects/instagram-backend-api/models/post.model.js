import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    posterId: {
      type: String,
    },
    description: {
      type: String,
      maxLength: [130, "Post description must be lesser than 130 characters"],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const Posts = model("posts", postSchema);

export { Posts };
