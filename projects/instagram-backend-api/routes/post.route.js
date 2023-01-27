import { Router } from "express";
import { body } from "express-validator";
import {
  createPost,
  getPosts,
  getPostDetails,
} from "../controllers/post.controller.js";
const router = Router();

const createPostValidation = [
  body("posterUrl").isURL(),
  body("description").optional().isString().isLength({ max: 130 }),
  body("author").notEmpty().isString(),
];
// /posts/
router.post("/", createPostValidation, createPost);

// /posts/
router.get("/", getPosts);

// /posts/63d3f6332f1a4285e940b0bf
router.get("/:postId", getPostDetails);
export default router;
