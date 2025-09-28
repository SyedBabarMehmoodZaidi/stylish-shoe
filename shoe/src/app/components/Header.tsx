"use client";

import { useState } from "react";
import { FaShoppingBag, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Man", "Woman", "Trends", "Collections", "Sale", "Blog"];

  return (
    <header className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Left Side Logo */}
        <div className="flex items-center">
          <Image
            src="/Images/Stylish.png" 
            alt="Logo"
            width={50}
            height={50}
            className="cursor-pointer"
          />
        </div>

        {/* Right Side Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="relative text-black font-medium
                         after:content-[''] after:absolute after:right-0 after:-bottom-1
                         after:w-0 after:h-[2px] after:bg-black 
                         after:transition-all after:duration-300
                         hover:after:w-full"
            >
              {link}
            </a>
          ))}

          {/* Icons */}
          <div className="flex space-x-4">
            <div className="h-6 w-6 text-black cursor-pointer ">
              <FaShoppingBag />
            </div>
            <div className="h-6 w-6 text-black cursor-pointer">
              <FaShoppingCart />
            </div>
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <div className="h-6 w-6 text-gray-700">
              {isOpen ? <FaTimes /> : <FaBars />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="relative text-gray-700 font-medium
                           after:content-[''] after:absolute after:right-0 after:-bottom-1
                           after:w-0 after:h-[2px] after:bg-black 
                           after:transition-all after:duration-300
                           hover:after:w-full"
              >
                {link}
              </a>
            ))}

            {/* Mobile Icons */}
            <div className="flex space-x-6 pt-4 border-t">
              <div className="h-6 w-6 text-gray-700 cursor-pointer hover:text-black">
                <FaShoppingBag />
              </div>
              <div className="h-6 w-6 text-gray-700 cursor-pointer hover:text-black">
                <FaShoppingCart />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
