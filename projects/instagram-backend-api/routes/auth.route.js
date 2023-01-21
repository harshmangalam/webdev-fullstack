import { Router } from "express";
import { login, signup } from "../controllers/auth.controller.js";
import { body } from "express-validator";
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

export default router;
