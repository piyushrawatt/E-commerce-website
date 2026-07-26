import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();

useEffect(() => {
  console.log("OrderSuccess Mounted");

  const timer = setTimeout(() => {
    console.log("Timer Finished");

    navigate("/orders");
  }, 2500);

  return () => {
    console.log("OrderSuccess Unmounted");
    clearTimeout(timer);
  };
}, []);
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-200">

      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center w-[400px]">

        {/* Checkmark */}

        <div className="w-28 h-28 rounded-full bg-green-500 flex items-center justify-center mx-auto animate-bounce">

          <span className="text-6xl text-white">
            ✓
          </span>

        </div>

        <h1 className="text-4xl font-bold mt-8 text-green-700">
          Order Placed!
        </h1>

        <p className="text-gray-500 mt-3">
          Thank you for shopping with us.
        </p>

        <p className="text-gray-500">
          Your order has been confirmed.
        </p>

        {/* Loading Bar */}

        <div className="w-full h-2 bg-gray-200 rounded-full mt-8 overflow-hidden">

          <div className="h-full bg-green-500 animate-pulse w-full"></div>

        </div>

        <p className="mt-5 text-blue-600 animate-pulse font-semibold">
          Redirecting to Orders...
        </p>

      </div>

    </div>
  );
}

export default OrderSuccess;