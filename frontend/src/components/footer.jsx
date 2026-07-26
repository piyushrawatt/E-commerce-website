import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import {
  FiTruck,
  FiRefreshCcw,
  FiShield,
  FiHeadphones,
} from "react-icons/fi";

function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 from-purple-700 to-violet-500 text-white mt-10">

      {/* Top Features */}
      <div className="grid md:grid-cols-4 gap-6 px-8 py-8 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <FiTruck className="text-orange-500 text-3xl" />
          <div>
            <h3 className="font-semibold">Free Delivery</h3>
            <p className="text-gray-400 text-sm">
              On orders above ₹499
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FiRefreshCcw className="text-orange-500 text-3xl" />
          <div>
            <h3 className="font-semibold">Easy Returns</h3>
            <p className="text-gray-400 text-sm">
              30 days return policy
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FiShield className="text-orange-500 text-3xl" />
          <div>
            <h3 className="font-semibold">Secure Payment</h3>
            <p className="text-gray-400 text-sm">
              100% secure checkout
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FiHeadphones className="text-orange-500 text-3xl" />
          <div>
            <h3 className="font-semibold">24/7 Support</h3>
            <p className="text-gray-400 text-sm">
              We're here to help
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="grid md:grid-cols-4 gap-10 px-8 py-12">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold">
            Shop<span className="text-orange-500">Ease</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Shop more, worry less. Discover the best
            products at the best prices.
          </p>

          <div className="flex gap-4 mt-5">
            <FaFacebookF className="cursor-pointer hover:text-orange-500" />
            <FaInstagram className="cursor-pointer hover:text-orange-500" />
            <FaTwitter className="cursor-pointer hover:text-orange-500" />
            <FaYoutube className="cursor-pointer hover:text-orange-500" />
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-bold text-lg mb-4">SHOP</h3>

          <ul className="space-y-2 text-gray-400">
            <li>All Products</li>
            <li>Featured Products</li>
            <li>Best Sellers</li>
            <li>New Arrivals</li>
            <li>Deals & Offers</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-bold text-lg mb-4">
            CUSTOMER SERVICE
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping Policy</li>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-lg mb-4">
            STAY UPDATED
          </h3>

          <p className="text-gray-400 mb-4">
            Subscribe to get latest offers and updates.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 rounded-l-lg text-white bg-gray-800 outline-none"
            />

            <button className="bg-orange-500 px-5 rounded-r-lg hover:bg-orange-600">
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-5 px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">
          © 2026 ShopEase. All Rights Reserved.
        </p>

        <div className="flex gap-4 mt-3 md:mt-0">
          <span>VISA</span>
          <span>MasterCard</span>
          <span>UPI</span>
          <span>Paytm</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;