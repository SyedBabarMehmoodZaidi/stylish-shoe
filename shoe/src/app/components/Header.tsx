"use client";

import { useState } from "react";
import { FaShoppingBag, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Man", href: "/Man" },
    { name: "Woman", href: "/Woman" },
    { name: "Trends", href: "/Trends" },
    { name: "Collections", href: "/collections" },
    { name: "Sale", href: "/sale" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Left Side Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/Images/Stylish.png"
              alt="Logo"
              width={50}
              height={50}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center relative">
          {navLinks.map((link) => {
            if (link.name === "Collections") {
              return (
                <div key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className="relative text-black font-medium
                      after:content-[''] after:absolute after:right-0 after:-bottom-1
                      after:w-0 after:h-[2px] after:bg-black 
                      after:transition-all after:duration-300
                      hover:after:w-full"
                  >
                    {link.name}
                  </Link>

                  {/* Dropdown - pure CSS hover control */}
                  <div className="absolute left-0 top-full mt-0 w-40 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <Link
                      href="/Man"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Man
                    </Link>
                    <Link
                      href="/Woman"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Woman
                    </Link>
                    <Link
                      href="/Trends"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Trends
                    </Link>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-black font-medium
                           after:content-[''] after:absolute after:right-0 after:-bottom-1
                           after:w-0 after:h-[2px] after:bg-black 
                           after:transition-all after:duration-300
                           hover:after:w-full"
              >
                {link.name}
              </Link>
            );
          })}

          {/* Icons */}
          <div className="flex space-x-4">
            <div className="h-6 w-6 text-black cursor-pointer">
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
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="relative text-gray-700 font-medium
                           after:content-[''] after:absolute after:right-0 after:-bottom-1
                           after:w-0 after:h-[2px] after:bg-black 
                           after:transition-all after:duration-300
                           hover:after:w-full"
              >
                {link.name}
              </Link>
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
