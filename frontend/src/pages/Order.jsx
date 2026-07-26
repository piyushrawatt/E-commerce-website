import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../API/axios";

function Order() {

  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {

      const res = await API.get("/api/order");

      console.log(res.data);

      setOrders(res.data.orders);

    } catch (err) {

      console.log(err);

    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  if (orders.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          No Orders Yet 📦
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-12">
          My Orders
        </h1>

        {orders.map((order) => (

          <div
            key={order._id}
            className="bg-white rounded-2xl shadow-lg p-6 mb-8 flex flex-col md:flex-row gap-6 hover:shadow-2xl transition"
          >

            {/* Product Image */}

            <img
              src={order.product.image}
              alt={order.product.title}
              className="w-48 h-48 rounded-xl object-cover"
            />

            {/* Product Details */}

            <div className="flex-1">

              <h2 className="text-3xl font-bold">
                {order.product.title}
              </h2>

              <p className="text-2xl text-green-600 font-semibold mt-3">
                ₹{order.product.price}
              </p>

              <p className="mt-3 text-lg">
                Quantity :
                <span className="font-semibold">
                  {" "}
                  {order.quantity}
                </span>
              </p>

              <p className="mt-2 text-lg">
                Ordered On :
                <span className="font-semibold">
                  {" "}
                  {new Date(order.createdAt).toLocaleDateString()}
                </span>
              </p>

              <p className="mt-2 text-lg">
                Order ID :
                <span className="font-semibold">
                  {" "}
                  #{order._id.slice(-6).toUpperCase()}
                </span>
              </p>

              <div className="mt-5">

                {order.status === "Delivered" ? (

                  <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-bold">

                    🟢 Delivered

                  </span>

                ) : (

                  <span className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-bold">

                    🟡 {order.status || "Processing"}

                  </span>

                )}

              </div>

            </div>

          </div>

        ))}

        <div className="text-center mt-12">

          <Link to="/product">

            <button className="bg-black text-white px-8 py-3 rounded-xl text-lg hover:bg-gray-800">

              Continue Shopping

            </button>

          </Link>

        </div>

      </div>

    </div>
  );
}

export default Order;