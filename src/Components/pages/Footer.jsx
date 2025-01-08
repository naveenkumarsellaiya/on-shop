import React from "react";
import {  FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-orange-500">
              ON-SHOP
            </h2>
            <p className="text-gray-400">
              Your one-stop shop for all your needs. From electronics to books, we’ve got you covered with the best deals and a seamless shopping experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-orange-500 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-orange-500 transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-orange-500 transition duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/my-order"
                  className="hover:text-orange-500 transition duration-300"
                >
                  My Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 ">
              <a
                href="https://www.linkedin.com/in/naveenkumar24/"
                className="text-gray-400 hover:text-blue-700 transition duration-300"
                title="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center border-t border-gray-700 pt-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} ON-SHOP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
