import React, { useState } from "react";
import API from "../../API/axios";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, ShoppingBag } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [logindata, setlogindata] = useState({
    email: "",
    password: "",
  });

  const [loading, setloading] = useState(false);
  const [err, seterr] = useState("");

  const showlogindata = (e) => {
    setlogindata({
      ...logindata,
      [e.target.name]: e.target.value,
    });
  };

  const submitlogin = async (e) => {
    e.preventDefault();

    if (!logindata.email || !logindata.password) {
      return alert("All fields are required");
    }

    try {
      setloading(true);

      const req = await API.post("/api/auth/login", logindata);

      localStorage.setItem("token", req.data.accessToken);

      alert("Login Successfully");

      navigate("/main");
    } catch (err) {
      seterr(err.response?.data?.message || "Login Failed");
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-amber-200 to-orange-300 p-5">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

        {/* Logo */}

        <div className="flex flex-col items-center">

          <div className="bg-amber-500 p-4 rounded-full text-white">
            <ShoppingBag size={35} />
          </div>

          <h1 className="text-3xl font-bold mt-4">
            Shop<span className="text-amber-500">Ease</span>
          </h1>

          <p className="text-gray-500 mt-2">
            Login to continue shopping
          </p>

        </div>

        {err && (
          <div className="bg-red-100 border border-red-300 text-red-600 rounded-lg p-3 mt-5 text-center">
            {err}
          </div>
        )}

        <form
          onSubmit={submitlogin}
          className="space-y-5 mt-6"
        >

          <div>

            <label className="font-medium">Email</label>

            <div className="flex items-center border rounded-xl mt-2 px-3">
              <Mail className="text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                value={logindata.email}
                onChange={showlogindata}
                placeholder="Enter your email"
                className="w-full p-3 outline-none"
              />
            </div>

          </div>

          <div>

            <label className="font-medium">Password</label>

            <div className="flex items-center border rounded-xl mt-2 px-3">
              <Lock className="text-gray-400" size={18} />
              <input
                type="password"
                name="password"
                value={logindata.password}
                onChange={showlogindata}
                placeholder="Enter your password"
                className="w-full p-3 outline-none"
              />
            </div>

          </div>

          <div className="flex justify-between text-sm">

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="text-amber-500 hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          <button
            disabled={loading}
            className="w-full bg-amber-500 hover:bg-amber-600 transition text-white rounded-xl p-3 font-semibold"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-amber-500 font-semibold"
          >
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;