import React, { useState } from "react";
import API from "../../API/axios";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, ShoppingBag } from "lucide-react";

function Signup() {
  const navigate = useNavigate();

  const [data, setdata] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmpass: "",
  });

  const [loading, setloading] = useState(false);
  const [err, seterr] = useState("");

  const showdata = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (
      !data.fullname ||
      !data.email ||
      !data.password ||
      !data.confirmpass
    ) {
      return alert("Please fill all fields");
    }

    if (data.password !== data.confirmpass) {
      return alert("Passwords do not match");
    }

    try {
      setloading(true);
      seterr("");

      await API.post("/api/auth/signup", {
        name: data.fullname,
        email: data.email,
        password: data.password,
      });

      alert("Account created successfully!");

      navigate("/main");
    } catch (err) {
      seterr(err.response?.data?.message || "Signup failed");
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-amber-200 to-orange-300 p-5">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

        {/* Logo */}

        <div className="flex flex-col items-center">

          <div className="bg-orange-500 text-white rounded-full p-4">
            <ShoppingBag size={35} />
          </div>

          <h1 className="text-3xl font-bold mt-4">
            Shop<span className="text-orange-500">Ease</span>
          </h1>

          <p className="text-gray-500 mt-2">
            Create your account
          </p>

        </div>

        {err && (
          <div className="bg-red-100 border border-red-300 text-red-600 rounded-lg p-3 mt-5 text-center">
            {err}
          </div>
        )}

        <form
          onSubmit={handlesubmit}
          className="space-y-5 mt-6"
        >

          <div>
            <label className="font-medium">Full Name</label>

            <div className="flex items-center border rounded-xl px-3 mt-2">
              <User className="text-gray-400" size={18} />
              <input
                type="text"
                name="fullname"
                value={data.fullname}
                onChange={showdata}
                placeholder="Enter your full name"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="font-medium">Email</label>

            <div className="flex items-center border rounded-xl px-3 mt-2">
              <Mail className="text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={showdata}
                placeholder="Enter your email"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="font-medium">Password</label>

            <div className="flex items-center border rounded-xl px-3 mt-2">
              <Lock className="text-gray-400" size={18} />
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={showdata}
                placeholder="Create a password"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="font-medium">Confirm Password</label>

            <div className="flex items-center border rounded-xl px-3 mt-2">
              <Lock className="text-gray-400" size={18} />
              <input
                type="password"
                name="confirmpass"
                value={data.confirmpass}
                onChange={showdata}
                placeholder="Confirm password"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" required />
            I agree to the Terms & Conditions
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 transition text-white rounded-xl p-3 font-semibold"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-500 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;