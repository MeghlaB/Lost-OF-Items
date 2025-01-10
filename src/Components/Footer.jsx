import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

import logoImage from "../../src/assets/logo.png";
import { ThemeContext } from "../AuthProvider/ThemeProvider";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`py-10 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-base-300 text-gray-700"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Website Logo */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <img
            src={logoImage}
            alt="Website Logo"
            className="w-20 lg:w-40 mb-2 border-2 border-primary rounded-xl"
          />
          <p
            className={`text-lg font-semibold ${
              theme === "dark" ? "text-white/75" : "text-gray-900"
            }`}
          >
            Lost And Found Ltd
          </p>
          <p
            className={`text-sm ${
              theme === "dark" ? "text-white/60" : "text-gray-700"
            }`}
          >
            Providing reliable tech since 2014
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
          <Link
            to="/"
            className="hover:text-purple-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-purple-500 transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/allCampaign"
            className="hover:text-purple-500 transition duration-300"
          >
            Hlep Us
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start">
          <p className="mb-2 font-semibold text-center md:text-left">
            Follow Us
          </p>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/groups/252388829152378"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:text-blue-600 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="divider"></div>
      <div className="text-center mt-6 text-sm">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold">Lost And Found Ltd</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
