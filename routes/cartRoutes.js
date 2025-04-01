import express from "express";
import {
  addProductToCart,
  userCart,
  deleteFromCart,
} from "../controllers/cartController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", protect, addProductToCart);
router.get("/", protect, userCart);
router.delete("/:productId", protect, deleteFromCart);

export default router;
