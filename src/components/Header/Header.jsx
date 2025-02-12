import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='innerCompo w-[90%] m-auto p-5 pt-10 flex justify-between'>
      <div className="leftSide flex items-center gap-20">
        <div className="logo font-extrabold poppins-extrabold text-black text-4xl dark:text-white">DevSphere </div>
        <div className="poppins-medium flex gap-10 items-center">
          <NavLink to={"/"} className={({ isActive }) =>
         isActive ? "text-blue-400 font-bold" : ""
        }>
            Home
          </NavLink>
          <NavLink to={"/AboutUs"} className={({ isActive }) =>
         isActive ? "text-blue-400 font-bold" : ""
        }>
            About Us
          </NavLink>
          <NavLink to={"/ContactUs"} className={({ isActive }) =>
         isActive ? "text-blue-400" : ""
        }>
            Contact Us
          </NavLink>
          
        </div>
      </div>
      <div className="right">
      <div className="flex space-x-4 poppins-medium">
      <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-900 font-semibold hover:bg-gray-300 focus:ring-2 focus:ring-gray-400">
        Login
      </button>
      <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-400">
        Sign Up
      </button>
    </div>
      </div>
    </div>
  )
}

export default Header