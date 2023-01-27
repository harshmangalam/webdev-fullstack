import { Router } from "express";
import { body } from "express-validator";
import { createPost } from "../controllers/post.controller.js";
const router = Router();

const createPostValidation = [
  body("posterUrl").isURL(),
  body("description").optional().isString().isLength({ max: 130 }),
  body("author").notEmpty().isString(),
];
// /posts/
router.post("/", createPostValidation, createPost);

export default router;
