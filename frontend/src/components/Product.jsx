import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../API/axios";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // -----------------------------
  // Fetch Products
  // -----------------------------

  const getProducts = async () => {
    try {
      const res = await API.get("/api/product");

      console.log(res.data.message);

      setProducts(res.data.products);

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // -----------------------------
  // Loading
  // -----------------------------

  if (loading) {
    return (
      <h1 className="text-center text-4xl mt-20">
        Loading Products...
      </h1>
    );
  }

  return (
    <div className="py-10">

      <h1 className="text-center text-4xl font-bold font-mono mb-10">
        All Products
      </h1>

      <div className="flex flex-wrap justify-center gap-8">

        {products.map((item) => (

          <Link
            key={item._id}
            to={`/product/${item._id}`}
          >

            <div
              className="
              w-64
              border
              rounded-2xl
              overflow-hidden
              shadow-md
              hover:shadow-xl
              hover:-translate-y-1
              duration-300
              bg-white
              "
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-4 text-center">

                <h2 className="font-semibold text-lg">
                  {item.title}
                </h2>

                <p className="text-xl font-bold mt-2">
                  ₹{item.price}
                </p>

                <p className="mt-2 text-yellow-500">
                  {"⭐".repeat(item.rating)}
                </p>

                <button
                  className="
                  mt-4
                  bg-black
                  text-white
                  px-4
                  py-2
                  rounded-lg
                  hover:bg-gray-800
                  "
                >
                  Add To Cart
                </button>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </div>
  );
}

export default Product;