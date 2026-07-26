import Product from "../models/product.js";
import cloudinary from "../config/cloudinary.js";
import product from "../models/product.js";
export const createProduct = async (req, res) => {
  console.log("create product called")
  try {
    console.log("BODY:", req.body);
// console.log("FILE:", req.file);
    const { title, description, price, stock, category,rating } = req.body;

    if (!title || !description || !price || !stock || !category||!rating) {
      return res.status(400).json({
        message: "all field are required",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        message: "image is required",
      });
    }


    const result = await cloudinary.uploader.upload(req.file.path);

    const product = await Product.create({
      title,
      description,
      price,
      image: result.secure_url, 
        stock,
      category,
      rating,
    });

    res.status(201).json({
      message: "product created successfully",
      product,
    });
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: err.message,
    });
  }
};  

 export const getProduct = async (req,res)=>{
    try{
         const products = await Product.find()
          res.status(201).json({
            message:"product fetched successfully",
            products
          })
    }
    catch (err) {
    res.status(500).json({
      message: err.message,
    });
 }
}

export const getSingleProduct = async (req, res) => {
  try {

    const fetchsingleproduct = await Product.findById(req.params.id);

    if (!fetchsingleproduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product fetched successfully",
      product: fetchsingleproduct,
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};
export const updateProduct = async (req,res)=>{
try{
    const findProduct = await Product.findByIdAndUpdate(req.params.id,
        req.body,
        {new:true}
    )
    if(!findProduct){ 
        return res.status(404).json({
            message:"product not found"
        })
    }
    res.status(200).json({
      message: "Product updated successfully",
   product :   findProduct,
    });

}
catch (err) {
    res.status(500).json({
      message: err.message,
    });
}
}

export const deleteProduct = async (req,res)=>{
 try{

   const deleteproduct = await Product.findByIdAndUpdate(req.params.id)
    if(!deleteProduct){
        return res.status(404).json({
            message:"product not found"
        })
    }
         res.status(200).json({
      message: "Product deleted successfully",
    });
}
    catch (err) {
    res.status(500).json({
      message: err.message,
    });
}
}
