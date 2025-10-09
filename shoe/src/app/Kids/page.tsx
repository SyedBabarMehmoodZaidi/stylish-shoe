"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function KidShoesPage() {
  const [columns, setColumns] = useState(4);
  const [isMobile, setIsMobile] = useState(false);
  const alignments = [2, 3, 4, 5, 6];

  const kidShoes = [
    { id: 1, name: "Tiny Runner", price: "$59.99", image: "/Images/k1.jpg" },
    { id: 2, name: "Mini Sneakers", price: "$65.00", image: "/Images/k2.jpg" },
    { id: 3, name: "Playground Pro", price: "$72.50", image: "/Images/k3.jpg" },
    { id: 4, name: "Fun Slides", price: "$45.99", image: "/Images/k4.jpg" },
    { id: 5, name: "Cool Comfy", price: "$52.00", image: "/Images/k5.jpg" },
    { id: 6, name: "Color Pop", price: "$49.50", image: "/Images/k6.jpg" },
    { id: 7, name: "Active Joy", price: "$68.99", image: "/Images/k7.jpg" },
    { id: 8, name: "Little Hiker", price: "$75.00", image: "/Images/k8.jpg" },
    { id: 9, name: "Star Light", price: "$62.49", image: "/Images/k9.jpg" },
    { id: 10, name: "Sport Champ", price: "$70.00", image: "/Images/k10.jpg" },
    { id: 11, name: "Desert Boots", price: "$99.00", image: "/images/k11.jpg" }, 
    { id: 12, name: "Air Flex", price: "$115.00", image: "/images/k12.jpg" }, 
    { id: 13, name: "Bold High-Tops", price: "$89.50", image: "/images/k13.jpg" }, 
    { id: 14, name: "Vintage Kicks", price: "$78.90", image: "/images/k14.jpg" },
    { id: 15, name: "Pro Sports", price: "$102.99", image: "/images/k15.jpg" }, 
    { id: 16, name: "Formal Lace-Up", price: "$135.00", image: "/images/k16.jpg" }, 
    { id: 17, name: "Slip-On Ease", price: "$85.99", image: "/images/k17.jpg" }, 
    { id: 18, name: "Trail Blazer", price: "$132.00", image: "/images/k18.jpg" },
  ];

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

  const mobileAlignments = [1, 2];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Cover Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/Images/kids.jpg"
          alt="Kids Collection"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Kid&apos;s Collection
          </h1>
          <button
            onClick={() =>
              document.getElementById("products")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Alignment Buttons */}
      <div className="flex justify-center items-center gap-3 mt-10 flex-wrap px-4">
        {(isMobile ? mobileAlignments : alignments).map((col, index) => (
          <button
            key={index}
            onClick={() => setColumns(col)}
            className={`p-2 border-2 rounded-md transition ${
              columns === col
                ? "border-black bg-gray-200"
                : "border-gray-300"
            }`}
          >
            <div
              className="flex gap-[2px]"
              style={{ width: "60px", justifyContent: "center" }}
            >
              {Array.from({ length: col }).map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-400 w-[8px] h-[20px] rounded-sm"
                ></div>
              ))}
            </div>
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="flex justify-center mt-10 px-6">
        <div
          id="products"
          className="grid gap-6 justify-center w-full max-w-[1600px]"
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(220px, 1fr))`,
          }}
        >
          {kidShoes.map((shoe) => (
            <Link
              key={shoe.id}
              href={`/Kids/${shoe.id}`} // ✅ Dynamic Link
              className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-full h-[300px] bg-gray-100">
                <Image
                  src={shoe.image}
                  alt={shoe.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  {shoe.name}
                </h2>
                <p className="text-gray-600 mt-2">{shoe.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
