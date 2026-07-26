import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Hero from "./components/Hero";
import Product from "./components/Product";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart"
import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import AdminDashboard from "./pages/AdminDashboard";
import OrderSuccess from "./pages/OrderSuccess";
import Order from "./pages/Order";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route path="/main" element={<Hero />} />

      <Route path="/product" element={<Product />} />

    <Route path="/admin/products" element={<AdminDashboard/>} />
      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />
      <Route path="/admin" element={<Admin/>} />
      <Route 
      path="/cart"
      element={<Cart/>}/>
      
     <Route
  path="/order-success"
  element={<OrderSuccess />}
/>

<Route
  path="/orders"
  element={<Order/>}
/>

    </Routes>
  );
}

export default App;