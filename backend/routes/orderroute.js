import express from "express";
import {
  placeOrder,
  getMyOrders,
  getSingleOrder,
  updateOrderStatus,
} from "../controllers/orderController.js";

import { protect } from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/", protect, placeOrder);

router.get("/", protect, getMyOrders);

router.get("/:id", protect, getSingleOrder);

router.put("/:id", protect, updateOrderStatus);

export default router;