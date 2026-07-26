import Order from "../models/order.js";
import Cart from "../models/cart.js";

// ==============================
// Place Order
// ==============================

export const placeOrder = async (req, res) => {
  try {
    // Get all cart items of logged-in user
    const cartItems = await Cart.find({
      user: req.user._id,
    }).populate("product");

    if (cartItems.length === 0) {
      return res.status(400).json({
        message: "Cart is empty",
      });
    }

    // Calculate total price
    let totalPrice = 0;

    cartItems.forEach((item) => {
      totalPrice += item.product.price * item.quantity;
    });

    // Create order items array
    const orderItem = cartItems.map((item) => ({
      product: item.product._id,
      quantity: item.quantity,
    }));

    // Create Order
    const order = await Order.create({
      user: req.user._id,
      orderItem,
      totalPrice,
    });

    // Clear user's cart
    await Cart.deleteMany({
      user: req.user._id,
    });

    res.status(201).json({
      message: "Order placed successfully",
      order,
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// ==============================
// Get My Orders
// ==============================

export const getMyOrders = async (req, res) => {
  try {

    const orders = await Order.find({
      user: req.user._id,
    })
      .populate("orderItem.product");

    res.status(200).json({
      orders,
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// ==============================
// Get Single Order
// ==============================

export const getSingleOrder = async (req, res) => {
  try {

    const order = await Order.findById(req.params.id)
      .populate("user", "name email")
      .populate("orderItem.product");

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    // Only owner or admin can view order
    if (
      order.user._id.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        message: "Not authorized",
      });
    }

    res.status(200).json({
      order,
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// ==============================
// Update Order Status
// ==============================

export const updateOrderStatus = async (req, res) => {
  try {

    const { status } = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    order.status = status;

    await order.save();

    res.status(200).json({
      message: "Order status updated successfully",
      order,
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};