import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-white text-[#7f7f7fff] py-6 px-4 mt-28">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left poppins-bold">
        
        <div>
          <h2 className="text-xl font-bold">DevSphere</h2>
          <p className="text-sm mt-1">&copy; {new Date().getFullYear()} DevSphere. All rights reserved.</p>
        </div>

        <div className="flex flex-col space-y-2">
          <NavLink to={"/"} className={({ isActive }) =>
         isActive ? "text-blue-600 font-bold" : ""
        }>
            Home
          </NavLink>
          <NavLink to={"/AboutUs"} className={({ isActive }) =>
         isActive ? "text-blue-600 font-bold" : ""
        }>
            About Us
          </NavLink>
          <NavLink to={"/ContactUs"} className={({ isActive }) =>
         isActive ? "text-blue-600" : ""
        }>
            Contact Us
          </NavLink>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="flex items-center space-x-2 cursor-pointer">
            <FaTwitter className="text-xl" /><span className="font-bold ">Twitter</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <FaInstagram className="text-xl" /><span className="font-bold ">Instagram</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <FaFacebook className="text-xl" /><span className="font-bold ">Facebook</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <FaLinkedin className="text-xl" /><span className="font-bold ">LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
