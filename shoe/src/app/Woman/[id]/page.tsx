"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const shoes = [
  { id: 1, name: "Urban Runner", price: 89.99, image: "/Images/w1.avif" },
  { id: 2, name: "Classic Leather", price: 109.0, image: "/Images/w2.jpg" },
  { id: 3, name: "Street Vibe", price: 74.5, image: "/Images/w3.jpg" },
  { id: 4, name: "Mountain Trek", price: 129.99, image: "/Images/w4.jpg" },
  { id: 5, name: "Sport Active", price: 95.0, image: "/Images/w5.jpg" },
  { id: 6, name: "Casual Comfort", price: 68.99, image: "/Images/w6.jpg" },
  { id: 7, name: "Luxury Brogues", price: 145.0, image: "/Images/w7.jpg" },
  { id: 8, name: "Retro Canvas", price: 59.99, image: "/Images/w8.jpg" },
  { id: 9, name: "Office Derby", price: 120.0, image: "/Images/w9.jpg" },
  { id: 10, name: "Chill Slides", price: 40.5, image: "/Images/w10.jpg" },
  { id: 11, name: "Desert Boots", price: 99.0, image: "/Images/w11.jpg" },
  { id: 12, name: "Air Flex", price: 115.0, image: "/Images/w12.jpg" },
  { id: 13, name: "Bold High-Tops", price: 89.5, image: "/Images/w13.jpg" },
  { id: 14, name: "Vintage Kicks", price: 78.9, image: "/Images/w14.jpg" },
  { id: 15, name: "Pro Sports", price: 102.99, image: "/Images/w15.webp" },
  { id: 16, name: "Formal Lace-Up", price: 135.0, image: "/Images/w16.jpg" },
  { id: 17, name: "Slip-On Ease", price: 85.99, image: "/Images/w17.jpg" },
  { id: 18, name: "Trail Blazer", price: 132.0, image: "/Images/w18.jpg" },
  { id: 19, name: "Running Boost", price: 98.0, image: "/Images/w19.jpg" },
  { id: 20, name: "Urban Classic", price: 122.49, image: "/Images/w20.jpg" },
];

export default function WomanShoeDetailPage() {
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
