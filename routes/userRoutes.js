import express from "express";
import {
  registerUser,
  loginUser,
  getAllUsers,
  updateUserRole,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", protect, admin, getAllUsers);
router.put("/update-role", protect, admin, updateUserRole);

export default router;
