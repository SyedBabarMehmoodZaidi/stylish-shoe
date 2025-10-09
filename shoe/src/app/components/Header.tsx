"use client";

import { useState } from "react";
import { FaShoppingBag, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showBag, setShowBag] = useState(false);

  const { cart, history } = useCart();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Man", href: "/Man" },
    { name: "Woman", href: "/Woman" },
    { name: "Kids", href: "/Kids" },
    { name: "Sport", href: "/Sport" },
    { name: "Sale", href: "/Trends" },
    { name: "Collections", href: "/" },
    { name: "Contact", href: "/Contact" },
  ];

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

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

                  {/* Dropdown */}
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
                      href="/Kids"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Kids
                    </Link>
                    <Link
                      href="/Trends"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Sale
                    </Link>
                    <Link
                      href="/Contact"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Contact
                    </Link>
                    <Link
                      href="/Sport"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Sport
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
          <div className="flex space-x-6 relative">
            {/* Bag Icon (History) */}
            <div
              className="relative cursor-pointer"
              onClick={() => {
                setShowBag(!showBag);
                setShowCart(false);
              }}
            >
              <div className="h-6 w-6 text-black">
              <FaShoppingCart />
              </div>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}

              {showCart && (
                <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg border rounded-lg p-3 z-50">
                  <h3 className="font-semibold mb-2">Your Cart</h3>
                  {cart.length === 0 ? (
                    <p className="text-gray-500 text-sm">Cart is empty.</p>
                  ) : (
                    cart.map((item) => (
                      <div key={item.id} className="flex justify-between border-b py-1 text-sm">
                        <span>{item.name}</span>
                        <span>×{item.quantity}</span>
                      </div>
                    ))
                  )}
                </div>
              )}
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
              <div
                className="h-6 w-6 text-gray-700 cursor-pointer hover:text-black"
                onClick={() => {
                  setShowBag(!showBag);
                  setShowCart(false);
                }}
              >
                <FaShoppingBag />
              </div>

              <div
                className="h-6 w-6 text-gray-700 cursor-pointer hover:text-black relative"
                onClick={() => {
                  setShowCart(!showCart);
                  setShowBag(false);
                }}
              >
                <FaShoppingCart />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
