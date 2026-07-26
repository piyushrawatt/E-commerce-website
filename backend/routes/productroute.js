import express from "express"
import { createProduct,getProduct,getSingleProduct,updateProduct,deleteProduct } from "../controllers/productcontroller.js"
import { protect } from "../middleware/authmiddleware.js"
import { admin } from "../middleware/adminmiddleware.js"
import upload from "../middleware/upload.js"
const router = express.Router()

router.post(
  "/",
  protect,
  admin,
  upload.single("image"),
  createProduct
)
router.put("/:id",protect,admin,updateProduct)
router.delete("/:id",protect,admin,deleteProduct)
router.get("/",getProduct)
router.get("/:id",getSingleProduct)
export default router