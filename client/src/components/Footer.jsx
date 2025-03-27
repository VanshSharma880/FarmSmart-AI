import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left">
          © 2025 FarmSmart AI. All rights reserved.
        </p>
        <div className="space-x-6 flex">
          <Link to="/" className="hover:text-green-300 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-300 transition">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-green-300 transition">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
