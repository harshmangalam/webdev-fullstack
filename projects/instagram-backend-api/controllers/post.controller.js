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
    posterId: req.file.filename,
  });

  // save post in mongodb

  const post = await newPost.save();

  return res.status(201).json({
    message: "Post created sucessfully",
    status: "success",
    post,
  });
}

async function getPosts(req, res) {
  const posts = await Posts.find();
  return res.status(200).json({
    message: "get all posts",
    stratus: "success",
    posts,
  });
}

async function getPostDetails(req, res) {
  try {
    const { postId } = req.params;
    console.log(postId);
    const post = await Posts.findById(postId);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
        status: "error",
      });
    }
    return res.status(200).json({
      message: "get post details",
      status: "success",
      post,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal server error",
      status: "error",
    });
  }
}

async function deletePost(req, res) {
  try {
    // grab the postId  inside req.params.postId

    const postId = req.params.postId;

    const result = await Posts.deleteOne({
      _id: postId,
    });

    return res.status(200).json({
      status: "success",
      message: "Post deleted successfully",
      result,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      status: "error",
    });
  }
}

async function updatePost(req, res) {
  try {
    // first we will collect postId from params

    const postId = req.params.postId;
    // then we will get req body updated post data

    const body = req.body;

    // we will update the post in db

    const result = await Posts.updateOne(
      { _id: postId },
      { $set: { ...body } }
    );

    return res.status(201).json({
      status: "success",
      message: "Post updated successfully",
      result,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      status: "error",
    });
  }
}
export { createPost, getPosts, getPostDetails, deletePost, updatePost };
