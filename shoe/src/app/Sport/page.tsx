"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SportShoesPage() {
  const [columns, setColumns] = useState(4);
  const [isMobile, setIsMobile] = useState(false);
  const alignments = [2, 3, 4, 5, 6];

  const shoes = [
    { id: 1, name: "Velocity X-Pro", price: 89.99, image: "/Images/sp1.jpg" },
    { id: 2, name: "Aero Sprint", price: 109.0, image: "/Images/sp2.jpg" },
    { id: 3, name: "PowerStride 5.0", price: 74.5, image: "/Images/sp3.jpg" },
    { id: 4, name: "UltraFlex Runner", price: 129.99, image: "/Images/sp4.jpg" },
    { id: 5, name: "Enduro Glide", price: 95.0, image: "/Images/sp5.jpg" },
    { id: 6, name: "RapidBoost XT", price: 68.99, image: "/Images/sp6.jpg" },
    { id: 7, name: "Nova Racer", price: 145.0, image: "/Images/sp7.jpg" },
    { id: 8, name: "TrailForce Max", price: 59.99, image: "/Images/sp8.jpg" },
    { id: 9, name: "HyperFlow Speed", price: 120.0, image: "/Images/sp9.jpg" },
    { id: 10, name: "AeroGrip Elite", price: 40.5, image: "/Images/sp10.jpg" },
    { id: 11, name: "Titan RunX", price: 99.0, image: "/Images/sp11.jpg" },
    { id: 12, name: "Momentum Z1", price: 115.0, image: "/Images/sp12.jpg" },
    { id: 13, name: "EdgePulse 300", price: 89.5, image: "/Images/sp13.jpg" },
    { id: 14, name: "SwiftStride Neo", price: 78.9, image: "/Images/sp14.jpg" },
    { id: 15, name: "TurboDash V8", price: 102.99, image: "/Images/sp15.jpg" },
    { id: 16, name: "Formal Lace-Up", price: 135.0, image: "/Images/sp16.jpg" },
    { id: 17, name: "Ignite ProFlex", price: 85.99, image: "/Images/sp17.jpg" },
    { id: 18, name: "ZoomTrail Alpha", price: 132.0, image: "/Images/sp18.jpg" },
    { id: 19, name: "AeroBlaze Evo", price: 98.0, image: "/Images/sp19.jpg" },
    { id: 20, name: "RunCore Fusion", price: 122.49, image: "/Images/sp20.jpg" },
    { id: 21, name: "SprintMaster 2.0", price: 110.0, image: "/Images/sp21.jpg" },
    { id: 22, name: "FlexiRun Pro", price: 105.5, image: "/Images/sp22.jpg" },
    { id: 23, name: "Endurance X1", price: 130.0, image: "/Images/sp23.jpg" },
    { id: 24, name: "Velocity Boost", price: 99.99, image: "/Images/sp24.jpg" },
    { id: 25, name: "TrailBlaze 4D", price: 140.0, image: "/Images/sp25.jpg" },
    { id: 26, name: "PowerRun Elite", price: 115.49, image: "/Images/sp26.jpg" },
    { id: 27, name: "AeroSwift X", price: 125.0, image: "/Images/sp27.jpg" },
    { id: 28, name: "TurboFlex 3.0", price: 108.0, image: "/Images/sp28.jpg" },

  ];

  // 🔹 Handle responsiveness
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
      {/* 🌸 Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/images/sport.jpg"
          alt="Woman Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
            Sport&apos;s Collection
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

      {/* 🔸 Grid Controls (Alignment Buttons) */}
      <div className="flex justify-center items-center gap-3 sm:gap-4 mt-8 sm:mt-10 flex-wrap px-4">
        {(isMobile ? mobileAlignments : alignments).map((col, index) => (
          <button
            key={index}
            onClick={() => setColumns(col)}
            className={`p-2 border-2 rounded-md transition text-sm ${
              columns === col ? "border-black bg-gray-200" : "border-gray-300"
            }`}
          >
            <div
              className="flex gap-[2px]"
              style={{ width: "60px", justifyContent: "center" }}
            >
              {Array.from({ length: col }).map((_, i) => (
                <div key={i} className="bg-gray-400 w-[8px] h-[20px] rounded-sm"></div>
              ))}
            </div>
          </button>
        ))}
      </div>

      {/* 👠 Shoes Grid */}
      <div className="flex justify-center mt-8 sm:mt-10 px-4 sm:px-6 md:px-10">
        <div
          id="products"
          className="grid gap-6 sm:gap-8 justify-center w-full max-w-[1600px]"
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(220px, 1fr))`,
          }}
        >
          {shoes.map((shoe) => (
            <Link key={shoe.id} href={`/Sport/${shoe.id}`}>
              <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
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
                    ${shoe.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
