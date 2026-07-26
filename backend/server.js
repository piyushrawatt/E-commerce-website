import  { config } from "dotenv"
config()
import express, { json, Router } from "express"
import mongoose from "mongoose"
import cors from "cors"

import productroute from "./routes/productroute.js"
import cartroute from "./routes/cartroute.js"
import authroute from "./routes/authroute.js"
import orderroute from "./routes/orderroute.js"

const app = express()
app.use(cors())
app.use(express.json())
let port = process.env.PORT || 7000

 app.get("/",(req,res)=>{
    res.send("your server is started ")
   })
 app.use("/api/auth",authroute)
   app.use("/api/product",productroute)
   app.use("/api/cart",cartroute)
   app.use("/api/order",orderroute)

   
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("backend is connected")
    app.listen(port,()=>{
       console.log( `server is started at ${port}`)
    })
})
.catch((error)=>{
    console.log(error)
})
