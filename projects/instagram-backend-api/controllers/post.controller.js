import { validationResult } from "express-validator";
import { Posts } from "../models/post.model.js";
async function createPost(req, res) {
  // validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // get all request body from request

  // create new instance of post
  const newPost = new Posts({
    ...req.body,
  });

  // save post in mongodb

  const post = await newPost.save();

  return res.status(201).json({
    message: "Post created sucessfully",
    status: "success",
    post,
  });
}

export { createPost };
