"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

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

export default function SportShoeDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const shoe = shoes.find((item) => item.id === Number(id));

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  if (!shoe)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700 text-lg">
        Product not found.
      </div>
    );

  const totalPrice = shoe.price * quantity;

  // ✅ Handle Add to Cart + Redirect to Order Page
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before proceeding.");
      return;
    }

    const orderData = {
      id: shoe.id,
      name: shoe.name,
      image: shoe.image,
      price: shoe.price,
      quantity,
      size: selectedSize,
      total: totalPrice.toFixed(2),
    };

    // ✅ Save to localStorage using same key used by Order Page
    localStorage.setItem("order", JSON.stringify(orderData));
    router.push("/order"); // Redirect to order form page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      {/* Product Container */}
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl max-w-5xl w-full overflow-hidden">
        {/* Left Side - Image */}
        <div className="md:w-1/2 relative h-[300px] sm:h-[400px] md:h-[500px] bg-gray-100">
          <Image
            src={shoe.image}
            alt={shoe.name}
            fill
            className="object-contain p-6"
            priority
          />
        </div>

        {/* Right Side - Details */}
        <div className="md:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            {shoe.name}
          </h1>

          <p className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6">
            ${totalPrice.toFixed(2)}
          </p>

          {/* Quantity Controls */}
          <div className="flex items-center gap-5 mb-6">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-4 py-1.5 bg-gray-200 rounded text-xl font-bold hover:bg-gray-300 transition"
            >
              -
            </button>
            <span className="text-2xl font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => Math.min(4, q + 1))}
              className="px-4 py-1.5 bg-gray-200 rounded text-xl font-bold hover:bg-gray-300 transition"
            >
              +
            </button>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Select Size
            </h3>
            <div className="grid grid-cols-5 gap-3">
              {Array.from({ length: 15 }, (_, i) => i + 35).map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border p-2 rounded-md text-sm font-medium transition ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-gray-100 hover:bg-gray-200 border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <p className="text-gray-600 mb-8">
            Condition: <span className="font-semibold">Excellent</span>
          </p>

          <button
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition text-lg font-semibold"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <button
        onClick={() => router.back()}
        className="mt-8 text-gray-700 hover:text-black transition"
      >
        ← Back to Collection
      </button>
    </div>
  );
}
