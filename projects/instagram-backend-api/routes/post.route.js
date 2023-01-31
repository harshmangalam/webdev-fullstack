import { Router } from "express";
import { body } from "express-validator";
import multer from "multer";
import {
  createPost,
  getPosts,
  getPostDetails,
  deletePost,
  updatePost,
} from "../controllers/post.controller.js";
const router = Router();

const upload = multer({
  dest: "./posts",
});
const createPostValidation = [
  body("posterUrl").isURL(),
  body("description").optional().isString().isLength({ max: 130 }),
  body("author").notEmpty().isString(),
];
// /posts/
router.post("/", upload.single("postMedia"), createPost);

// /posts/
router.get("/", getPosts);

router.delete("/:postId", deletePost);

router.put("/:postId", updatePost);
// /posts/63d3f6332f1a4285e940b0bf
router.get("/:postId", getPostDetails);
export default router;
