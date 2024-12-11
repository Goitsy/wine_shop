import express from "express";
import {
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/ProductControl.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, admin, addProduct); // Admin: Add product
router.put("/", protect, admin, updateProduct); // Admin: Update product
router.delete("/:id", protect, admin, deleteProduct); // Admin: Delete product

export default router;
