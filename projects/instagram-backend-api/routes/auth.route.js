import { Router } from "express";
import {
  login,
  signup,
  getCurrentUser,
} from "../controllers/auth.controller.js";
import { body } from "express-validator";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
const router = Router();

const signupValidation = [
  body("username").isString().isLength({ min: 3, max: 30 }),
  body("password").isString().isLength({ min: 6 }),
  body("name").isString().isLength({ min: 3, max: 30 }),
];

const loginValidation = [
  body("username").isString().notEmpty(),
  body("password").isString().notEmpty(),
];

router.post("/login", loginValidation, login);
router.post("/signup", signupValidation, signup);

//protected route --> only authenticated user can access this route
router.get("/me", isAuthenticated, getCurrentUser);
export default router;
