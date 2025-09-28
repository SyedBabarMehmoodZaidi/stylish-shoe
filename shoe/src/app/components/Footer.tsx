"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-center py-16 px-6">
      {/* Grid Columns */}
      <div className="max-w-[1700px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
        {/* Column 1 */}
        <div>
          <h1 className="text-lg font-bold text-black mb-4">Info</h1>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Track Your Order</li>
            <li>Our Blog</li>
            <li>Privacy policy</li>
            <li>Shipping</li>
            <li>Contact Us</li>
            <li>Help</li>
            <li>Community</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h1 className="text-lg font-bold text-black mb-4">About Jatra</h1>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Our Story</li>
            <li>Job Opportunities</li>
            <li>Wholesale</li>
            <li>Affiliates</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h1 className="text-lg font-bold text-black mb-4">Women Clothing</h1>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Intimates</li>
            <li>Accessories</li>
            <li>Shoes</li>
            <li>Beauty + Wellness</li>
            <li>Swim</li>
            <li>Activewear</li>
            <li>Sale</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h1 className="text-lg font-bold text-black mb-4">Jeans</h1>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Shop All Jeans</li>
            <li>New Jeans</li>
            <li>Flare Jeans</li>
            <li>High-Rise Jeans</li>
            <li>Skinny Jeans</li>
            <li>Wide-Leg Jeans</li>
            <li>Boyfriend Jeans</li>
            <li>Straight-Leg Jeans</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h1 className="text-lg font-bold text-black mb-4">Mens Shoes</h1>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Heels + Wedges</li>
            <li>Sandals</li>
            <li>Slippers</li>
            <li>Socks + Tights</li>
            <li>Top Rated</li>
            <li>Sale</li>
          </ul>
        </div>

        {/* Column 6 */}
        <div>
          <h1 className="text-lg font-bold text-black mb-4">Mens Clothing</h1>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>T-Shirts</li>
            <li>Shirts</li>
            <li>Shorts</li>
            <li>Jeans</li>
            <li>Trousers</li>
            <li>Clothing Sets</li>
            <li>Ethnic Wear</li>
            <li>Sweatshirts</li>
            <li>Innerwear</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500">
          © JATRA Copyrights 2021. Designed by Templates Jungle
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-6 text-[#F1F1F1]">
          FASHION STORE
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
