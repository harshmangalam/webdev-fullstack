import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import {
  deleteUser,
  getAllUsers,
  getUserDetail,
  updateUser,
} from "../controllers/user.controller.js";
const router = Router();

// /users/
router.get("/", getAllUsers);
router.get("/:userId", getUserDetail);
router.delete("/:userId", isAuthenticated, deleteUser);
router.put("/:userId", updateUser);

export default router;
