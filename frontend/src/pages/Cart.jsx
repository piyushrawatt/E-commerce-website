import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../API/axios";

function Cart() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // -----------------------------
  // Get Cart Items
  // -----------------------------

  const getCart = async () => {
    try {
      const res = await API.get("/api/cart");

      console.log(res.data);

      setCartItems(res.data.fetchcart);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

const addCartItem = async (productId) => {
  try {
    const res = await API.post("/api/cart", {
      product: productId,
      quantity: 1,
    });

    console.log(res.data);

  } catch (err) {
    console.log(err);
  }
};
useEffect(()=>{
  addCartItem()
},[])


  // -----------------------------
  // Delete Cart Item
  // -----------------------------

  const deleteCart = async (id) => {
    try {
      await API.delete(`/api/cart/${id}`);

      setCartItems((prev) =>
        prev.filter((item) => item._id !== id)
      );
    } catch (err) {
      console.log(err);
    }
  };

  // -----------------------------
  // Total Price
  // -----------------------------

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  // -----------------------------
  // Checkout
  // -----------------------------

  const checkout = () => {
    navigate("/order-success");
  };

  // -----------------------------
  // Loading
  // -----------------------------

  if (loading) {
    return (
      <h1 className="text-center text-4xl mt-20">
        Loading...
      </h1>
    );
  }

  // -----------------------------
  // Empty Cart
  // -----------------------------

  if (cartItems.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold">
          Cart Is Empty 🛒
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-10">
        My Cart
      </h1>

      {cartItems.map((item) => (
        <div
          key={item._id}
          className="flex items-center justify-between border rounded-xl p-5 mb-5 shadow-lg"
        >
          <div className="flex items-center gap-5">

            <img
              src={item.product.image}
              alt={item.product.title}
              className="w-32 h-32 object-cover rounded-xl"
            />

            <div>

              <h2 className="text-2xl font-bold">
                {item.product.title}
              </h2>

              <p className="text-xl text-gray-600 mt-2">
                ₹{item.product.price}
              </p>

              <p className="text-gray-500 mt-2">
                Quantity : {item.quantity}
              </p>

            </div>

          </div>

          <button
            onClick={() => deleteCart(item._id)}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
          >
            Remove
          </button>

        </div>
      ))}

      <div className="text-right mt-10 border-t pt-8">

        <h2 className="text-4xl font-bold">
          Total : ₹{total}
        </h2>

        <button
          onClick={checkout}
          className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl text-xl font-semibold"
        >
          Place Order
        </button>

      </div>

    </div>
  );
}

export default Cart;