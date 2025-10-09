"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

// 🟡 Trend shoes data (same as trend/page.tsx)
const shoes = [
  { id: 1, name: "Urban Runner", price: "$89.99", image: "/Images/featured1.jpg" },
  { id: 2, name: "Classic Leather", price: "$109.0", image: "/Images/featured2.jpg" },
  { id: 3, name: "Street Vibe", price: "$74.5", image: "/Images/featured3.jpg" },
  { id: 4, name: "Mountain Trek", price: "$129.99", image: "/Images/featured4.jpg" },
  { id: 5, name: "Sport Active", price: "$95.0", image: "/Images/featured5.jpg" },
  { id: 6, name: "Casual Comfort", price: "$68.99", image: "/Images/featured6.jpg" },
  { id: 7, name: "Luxury Brogues", price: "$145.0", image: "/Images/featured7.jpg" },
  { id: 8, name: "Retro Canvas", price: "$59.99", image: "/Images/featured8.jpg" },
  { id: 9, name: "Office Derby", price: "$120.0", image: "/Images/featured9.jpg" },
  { id: 10, name: "Chill Slides", price: "$40.5", image: "/Images/featured10.jpg" },
  { id: 11, name: "Desert Boots", price: "$99.0", image: "/Images/f1.png" },
  { id: 12, name: "Air Flex", price: "$115.0", image: "/Images/f2.png" },
  { id: 13, name: "Bold High-Tops", price: "$89.5", image: "/Images/heroshoe1.png" },
  { id: 14, name: "Vintage Kicks", price: "$78.9", image: "/Images/heroshoe2.png" },
  { id: 15, name: "Pro Sports", price: "$102.99", image: "/Images/heroshoe3.png" },
  { id: 16, name: "Formal Lace-Up", price: "$135.0", image: "/Images/p1.png" },
  { id: 17, name: "Slip-On Ease", price: "$85.99", image: "/Images/p2.png" },
  { id: 18, name: "Trail Blazer", price: "$132.0", image: "/Images/p3.png" },
  { id: 19, name: "Running Boost", price: "$98.0", image: "/Images/p4.png" },
  { id: 20, name: "Urban Classic", price: "$122.49", image: "/Images/p5.png" },
];

export default function TrendProductDetail() {
  const { id } = useParams();
  const router = useRouter();

  // ✅ Find the product
  const product = shoes.find((item) => item.id === Number(id));

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold text-gray-600">
        Product not found 😢
      </div>
    );
  }

  // ✅ Convert price string ("$89.99") → number (89.99)
  const priceNumber = Number(product.price.replace("$", ""));
  const discountPercent = 20;
  const discountAmount = priceNumber * (discountPercent / 100);
  const discountedPrice = priceNumber - discountAmount;

  // ✅ Quantity control
  const handleQuantityChange = (type: "inc" | "dec") => {
    setQuantity((prev) => {
      if (type === "inc" && prev < 4) return prev + 1;
      if (type === "dec" && prev > 1) return prev - 1;
      return prev;
    });
  };

  // ✅ Total Price (after discount)
  const totalPrice = (discountedPrice * quantity).toFixed(2);

  // ✅ Shoe sizes
  const sizes = Array.from({ length: 8 }, (_, i) => i + 39);

  // ✅ Add to cart
  const handleAddToCart = () => {
    const orderData = {
      id: product.id,
      name: product.name,
      originalPrice: priceNumber.toFixed(2),
      discountedPrice: discountedPrice.toFixed(2),
      total: totalPrice,
      quantity,
      size: selectedSize,
      image: product.image,
    };
    localStorage.setItem("order", JSON.stringify(orderData));
    router.push("/order");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10">
      {/* 🔸 Product Card */}
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg w-full max-w-5xl overflow-hidden">
        
        {/* Left: Image */}
        <div className="flex-1 flex items-center justify-center bg-gray-100 p-6 relative">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="object-contain max-h-[400px] rounded-lg"
            priority
          />
          {/* 🔴 20% OFF Badge */}
          <div className="absolute top-5 left-5 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
            20% OFF
          </div>
        </div>

        {/* Right: Details */}
        <div className="flex-1 p-6 sm:p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-3 text-gray-800">{product.name}</h1>

          {/* ✅ Show both prices */}
          <div className="mb-4">
            <p className="text-lg text-gray-500 line-through">
              Original Price: ${priceNumber.toFixed(2)}
            </p>
            <p className="text-2xl text-green-600 font-semibold">
              Discounted: ${discountedPrice.toFixed(2)}
            </p>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gray-700 font-medium text-lg">Quantity:</span>
            <div className="flex items-center gap-3 border rounded-full px-3 py-1">
              <button
                onClick={() => handleQuantityChange("dec")}
                className="text-lg font-bold hover:text-red-500 transition"
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("inc")}
                className="text-lg font-bold hover:text-green-600 transition"
              >
                +
              </button>
            </div>
          </div>

          {/* Total */}
          <p className="text-lg sm:text-xl text-gray-800 font-semibold mb-6">
            Total after discount: ${totalPrice}
          </p>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="text-gray-700 font-medium mb-2">Select Size:</h3>
            <div className="grid grid-cols-5 sm:grid-cols-8 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border rounded-md py-2 text-sm sm:text-base ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Condition */}
          <p className="text-gray-600 mb-6">
            <strong>Condition:</strong> Excellent — brand new and high quality.
          </p>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            disabled={!selectedSize}
            className={`${
              selectedSize
                ? "bg-black hover:bg-gray-800"
                : "bg-gray-400 cursor-not-allowed"
            } text-white font-semibold py-3 rounded-full transition`}
          >
            {selectedSize ? "Add to Cart" : "Select Size to Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}
