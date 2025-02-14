import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // Import icons for mobile menu

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-[90%] mx-auto p-5 pt-6 flex justify-between items-center sticky top-0 backdrop-blur-lg bg-white/50 dark:bg-gray-900/50 transition-all duration-300 z-50">
      
      {/* Left Side - Logo & Nav Links */}
      <div className="flex items-center">
        <div className="text-4xl font-extrabold poppins-extrabold text-black dark:text-white">
          DevSphere
        </div>

        {/* Desktop Nav */}
        <div className="hidden xl:flex gap-10 items-center ml-16 poppins-medium">
          <NavLink to="/" className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-900 dark:text-white hover:text-blue-600"
          }>
            Home
          </NavLink>
          <NavLink to="/AboutUs" className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-900 dark:text-white hover:text-blue-600"
          }>
            About Us
          </NavLink>
          <NavLink to="/ContactUs" className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-900 dark:text-white hover:text-blue-600"
          }>
            Contact Us
          </NavLink>
        </div>
      </div>

      {/* Right Side - Buttons & Mobile Menu */}
      <div className="flex items-center">
        {/* Desktop Buttons */}
        <div className="hidden xl:flex space-x-4 poppins-medium">
          <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-900 font-semibold hover:bg-gray-300 focus:ring-2 focus:ring-gray-400">
            Login
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-400">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="xl:hidden text-3xl text-gray-900 dark:text-white focus:outline-none">
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg flex flex-col items-center space-y-6 py-6 transition-all duration-300 xl:hidden poppins-medium">
          <NavLink to="/" className="text-gray-900 dark:text-white text-lg hover:text-blue-600" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/AboutUs" className="text-gray-900 dark:text-white text-lg hover:text-blue-600" onClick={() => setMenuOpen(false)}>
            About Us
          </NavLink>
          <NavLink to="/ContactUs" className="text-gray-900 dark:text-white text-lg hover:text-blue-600" onClick={() => setMenuOpen(false)}>
            Contact Us
          </NavLink>
          <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-900 font-semibold hover:bg-gray-300 focus:ring-2 focus:ring-gray-400">
            Login
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-400">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}
