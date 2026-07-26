import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../API/axios";

import { MdOutlineSettingsBackupRestore } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { Ri24HoursLine } from "react-icons/ri";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  // -------------------------
  // Fetch Single Product
  // -------------------------

  const getProduct = async () => {
    try {

      const res = await API.get(`/api/product/${id}`);

      console.log(res.data);

      setProduct(res.data.product);

    } catch (err) {

      console.log(err);

    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  // -------------------------
  // Add To Cart
  // -------------------------

  const addCartItem = async (productId) => {
    try {

      const res = await API.post("/api/cart", {
        product: productId,
        quantity: 1,
      });

      console.log(res.data);

      alert("Product Added Successfully");

    } catch (err) {

      console.log(err);

      alert("Something went wrong");

    }
  };

  // -------------------------

  if (!product) {
    return (
      <h1 className="text-center text-4xl mt-20">
        Loading...
      </h1>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-10">

      <div className="grid md:grid-cols-2 gap-10">

        <div>

          <img
            src={product.image}
            alt={product.title}
            className="rounded-2xl w-full h-[500px] object-cover"
          />

        </div>

        <div className="flex flex-col justify-center">

          <h1 className="text-5xl font-bold">
            {product.title}
          </h1>

          <p className="text-yellow-500 text-2xl mt-3">
            {"⭐".repeat(product.rating)}
          </p>

          <p className="text-3xl font-bold mt-5">
            ₹{product.price}
          </p>

          <p className="mt-5 text-gray-600">
            {product.description}
          </p>

          <p className="mt-4">
            <span className="font-bold">
              Category :
            </span>{" "}
            {product.category}
          </p>

          <p className="mt-2">
            <span className="font-bold">
              Stock :
            </span>{" "}
            {product.stock}
          </p>

          <div className="flex justify-center gap-10 mt-8">

            <div className="flex flex-col items-center">
              <MdOutlineSettingsBackupRestore className="text-3xl" />
              <p>7 Days Replacement</p>
            </div>

            <div className="flex flex-col items-center">
              <RiMoneyRupeeCircleFill className="text-3xl" />
              <p>Cash On Delivery</p>
            </div>

            <div className="flex flex-col items-center">
              <Ri24HoursLine className="text-3xl" />
              <p>24x7 Support</p>
            </div>

          </div>

          <button

            onClick={() => addCartItem(product._id)}

            className="
            mt-8
            bg-black
            text-white
            py-3
            rounded-xl
            hover:bg-gray-800
            "

          >

            Add To Cart

          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;