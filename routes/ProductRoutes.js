import express from "express";
import {
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/ProductControl.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, admin, addProduct);
router.put("/", protect, admin, updateProduct);
router.delete("/:id", protect, admin, deleteProduct);
export default router;
