import React from "react";
import { Link } from "react-router-dom";

const products = [
  {  id: 1,
    title: "iPhone 16 Pro",
    price: 77777,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
    rating:5
  },
  {
    id: 2,
    title: "Boat Earbuds",
    price: 1499,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46",
     rating:5
  },
  {
    id: 3,
    title: "Samsung S25",
    price: 69999,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
     rating:3
  },
  {
    id: 4,
    title: "Apple Watch",
    price: 29999,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d",
     rating:2
  },
    {
    id: 5,
    title: "Apple Watch",
    price: 29999,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d",
     rating:1
  },
];

function FeaturedProduct() {
  return (
    <div className="bg-gray-100 border-2 border-yellow-400 w-full rounded-2xl ">
      <h1 className="text-7xl text-blue-950 text font-mono text-center font-bold my-10 ">
        Featured <span className="text-yellow-400">Products</span> 
      </h1>

      <div className="flex flex-wrap gap-30 justify-center">
        {products.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="border h-75 flex flex-col justify-center rounded-xl p-3 w-64 text-center bg-blue-950 text-white"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-40 w-full object-cover rounded-lg "
            />

            <h2 className="mt-2 font-semibold">{item.title}</h2>

            <p>₹{item.price}</p>
               <p >{"⭐".repeat(item.rating)}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/product">
          <button className="bg-black text-white px-6 py-3 rounded-lg mb-5">
            View All Products
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedProduct;