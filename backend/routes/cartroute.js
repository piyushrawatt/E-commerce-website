import express from "express"
import { addToCart,deleteCartItem,updateCart,getCart } from "../controllers/cartcontroller.js"
import {protect} from "../middleware/authmiddleware.js"

const route = express.Router()

route.post("/",protect,addToCart)
route.get("/",protect,getCart)
route.put("/:id",protect,updateCart)
route.delete("/:id",protect,deleteCartItem)

export default route