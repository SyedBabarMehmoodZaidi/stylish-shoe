"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ManShoesPage() {
  const [columns, setColumns] = useState(4);
  const [isMobile, setIsMobile] = useState(false);
  const alignments = [2, 3, 4, 5, 6];

  const shoes = [
    { id: 1, name: "Urban Runner", price: "$89.99", image: "/Images/m1.jpg" },
    { id: 2, name: "Classic Leather", price: "$109.00", image: "/Images/m2.jpg" },
    { id: 3, name: "Street Vibe", price: "$74.50", image: "/Images/m3.jpg" },
    { id: 4, name: "Mountain Trek", price: "$129.99", image: "/Images/m4.jpg" },
    { id: 5, name: "Sport Active", price: "$95.00", image: "/Images/m5.jpg" },
    { id: 6, name: "Casual Comfort", price: "$68.99", image: "/Images/m6.jpg" },
    { id: 7, name: "Luxury Brogues", price: "$145.00", image: "/Images/m7.jpg" },
    { id: 8, name: "Retro Canvas", price: "$59.99", image: "/Images/m8.jpg" },
    { id: 9, name: "Office Derby", price: "$120.00", image: "/Images/m9.jpg" },
    { id: 10, name: "Chill Slides", price: "$40.50", image: "/Images/m10.jpg" },
    { id: 11, name: "Desert Boots", price: "$99.00", image: "/Images/m11.jpg" },
    { id: 12, name: "Air Flex", price: "$115.00", image: "/Images/m12.jpg" },
    { id: 13, name: "Bold High-Tops", price: "$89.50", image: "/Images/m13.jpg" },
    { id: 14, name: "Vintage Kicks", price: "$78.90", image: "/Images/m14.webp" },
    { id: 15, name: "Pro Sports", price: "$102.99", image: "/Images/m15.jpg" },
    { id: 16, name: "Formal Lace-Up", price: "$135.00", image: "/Images/m16.jpg" },
    { id: 17, name: "Slip-On Ease", price: "$85.99", image: "/Images/m17.jpg" },
    { id: 18, name: "Trail Blazer", price: "$132.00", image: "/Images/m18.jpg" },
    { id: 19, name: "Running Boost", price: "$98.00", image: "/Images/m19.jpg" },
    { id: 20, name: "Urban Classic", price: "$122.49", image: "/Images/m20.webp" },
  ];

  // 🔹 Handle responsive columns
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setColumns(1);
      } else {
        setIsMobile(false);
        setColumns(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔹 Mobile alignments (only 1 or 2)
  const mobileAlignments = [1, 2];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh]">
  {/* Background Image */}
  <Image
    src="/Images/man.webp"
    alt="Men&apos;s Collection"
    fill
    className="object-cover brightness-75"
    priority
  />

  {/* Overlay Text */}
  <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-12 md:px-20 text-white">
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
      Men&apos;s Collection
    </h1>
    <button
      onClick={() =>
        document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
      }
      className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition text-sm sm:text-base"
    >
      Shop Now
    </button>
  </div>
</section>


      {/* Layout Controls */}
      <div className="flex justify-center items-center gap-3 sm:gap-4 mt-8 sm:mt-10 flex-wrap px-4">
        {(isMobile ? mobileAlignments : alignments).map((col, index) => (
          <button
            key={index}
            onClick={() => setColumns(col)}
            className={`p-2 border-2 rounded-md transition text-sm ${
              columns === col ? "border-black bg-gray-200" : "border-gray-300"
            }`}
          >
            <div className="flex gap-[2px]" style={{ width: "60px", justifyContent: "center" }}>
              {Array.from({ length: col }).map((_, i) => (
                <div key={i} className="bg-gray-400 w-[8px] h-[20px] rounded-sm"></div>
              ))}
            </div>
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="flex justify-center mt-8 sm:mt-10 px-4 sm:px-6 md:px-10">
        <div
          id="products"
          className="grid gap-6 sm:gap-8 justify-center w-full max-w-[1600px]"
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(220px, 1fr))`,
          }}
        >
          {shoes.map((shoe) => (
  <Link
    key={shoe.id}
    href={`/Man/${shoe.id}`}
    className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
  >
    <div
      className={`relative w-full ${
        columns === 2 || columns === 1 ? "h-[350px]" : "h-[250px]"
      } sm:h-[300px] md:h-[350px] lg:h-[400px]`}
    >
      <Image
        src={shoe.image}
        alt={shoe.name}
        fill
        className="object-contain bg-gray-100"
      />
    </div>
    <div className="p-4 text-center">
      <h2 className="text-base sm:text-lg font-semibold text-gray-800">
        {shoe.name}
      </h2>
      <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
        {shoe.price}
      </p>
    </div>
  </Link>
))}

        </div>
      </div>
    </div>
  );
}
