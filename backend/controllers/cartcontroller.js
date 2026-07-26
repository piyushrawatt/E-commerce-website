import Cart from "../models/cart.js";

export const addToCart = async(req,res) =>{
 try{  
    const {product,quantity} = req.body
    if( !product) {
    return res.status(400).json({
        message :"user and product are required"
    })
}

 const existingcart = await Cart.findOne({
    user:req.user._id,
    product
 })
 if(existingcart){
     existingcart.quantity += quantity|| 1
    await existingcart.save()
return res.status(200).json({
    message:"cart quantity udated",
    existingcart
})
    
 }

const createcart = await Cart.create({
    user :req.user._id,
    product,
    quantity:quantity||1
})
res.status(201).json({
    message:"product added to the cart",
    createcart
})
 }
 catch(err){
    res.status(500).json({
        message:err.message
    })
 }
}

export const getCart = async (req,res)=>{

try{
    const fetchcart = await Cart.find({user:req.user._id}).populate("product")
    res.status(200).json({
        message:"cart item",
        fetchcart
    })
}
catch(err){
    res.status(500).json({
        message:err.message
    })
}
}

export const updateCart = async (req,res)=>{

 try{
    const{quantity}   = req.body
     const updatethecart = await Cart.findByIdAndUpdate(req.params.id,
        {quantity},
        {new:true}
    )
    if (!updatethecart) {
  return res.status(404).json({
    message: "Cart item not found"
  });
}
    res.status(200).json({
        message:"cart updated successfully",
       updatethecart
    })
}
catch(err){
    res.status(500).json({
        message:err.message
    })
}
}

export const deleteCartItem = async (req,res)=>{
try{const deleteitem = await Cart.findByIdAndDelete(req.params.id)
    if (!deleteitem) {
  return res.status(404).json({
    message: "Cart item not found"
  });
}
   res.status(200).json({
        message:"cart item delete successfully",
     deleteitem
    })
}
    catch(err){
    res.status(500).json({
        message:err.message
    })
}
}