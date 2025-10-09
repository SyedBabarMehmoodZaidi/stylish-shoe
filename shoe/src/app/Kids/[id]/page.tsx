"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const kidShoes = [
  { id: 1, name: "Tiny Runner", price: 59.99, image: "/Images/k1.jpg" },
  { id: 2, name: "Mini Sneakers", price: 65.0, image: "/Images/k2.jpg" },
  { id: 3, name: "Playground Pro", price: 72.5, image: "/Images/k3.jpg" },
  { id: 4, name: "Fun Slides", price: 45.99, image: "/Images/k4.jpg" },
  { id: 5, name: "Cool Comfy", price: 52.0, image: "/Images/k5.jpg" },
  { id: 6, name: "Color Pop", price: 49.5, image: "/Images/k6.jpg" },
  { id: 7, name: "Active Joy", price: 68.99, image: "/Images/k7.jpg" },
  { id: 8, name: "Little Hiker", price: 75.0, image: "/Images/k8.jpg" },
  { id: 9, name: "Star Light", price: 62.49, image: "/Images/k9.jpg" },
  { id: 10, name: "Sport Champ", price: 70.0, image: "/Images/k10.jpg" },
  { id: 11, name: "Desert Boots", price: "$99.00", image: "/Images/k11.jpg" },
  { id: 12, name: "Air Flex", price: "$115.00", image: "/Images/k12.jpg" },
  { id: 13, name: "Bold High-Tops", price: "$89.50", image: "/Images/k13.jpg" },
  { id: 14, name: "Vintage Kicks", price: "$78.90", image: "/Images/k14.jpg" },
  { id: 15, name: "Pro Sports", price: "$102.99", image: "/Images/k15.jpg" },
  { id: 16, name: "Formal Lace-Up", price: "$135.00", image: "/Images/k16.jpg" },
  { id: 17, name: "Slip-On Ease", price: "$85.99", image: "/Images/k17.jpg" },
  { id: 18, name: "Trail Blazer", price: "$132.00", image: "/Images/k18.jpg" },
];

export default function KidShoeDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const shoe = kidShoes.find((item) => item.id === Number(id));

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  if (!shoe)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700 text-lg">
        Product not found.
      </div>
    );

  // ✅ Convert price to number safely (handles "$" or number)
  const numericPrice =
    typeof shoe.price === "string"
      ? parseFloat(shoe.price.replace(/[^0-9.]/g, ""))
      : shoe.price;

  const totalPrice = numericPrice * quantity;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before proceeding.");
      return;
    }

    const orderData = {
      id: shoe.id,
      name: shoe.name,
      image: shoe.image,
      price: numericPrice,
      quantity,
      size: selectedSize,
      total: totalPrice.toFixed(2),
    };

    localStorage.setItem("order", JSON.stringify(orderData));
    router.push("/order");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      {/* Product Card */}
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl max-w-5xl w-full overflow-hidden">
        {/* Image Section */}
        <div className="md:w-1/2 relative h-[300px] sm:h-[400px] md:h-[500px] bg-gray-100">
          <Image
            src={shoe.image}
            alt={shoe.name}
            fill
            className="object-contain p-6"
            priority
          />
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            {shoe.name}
          </h1>

          <p className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6">
            Price: ${numericPrice.toFixed(2)}
          </p>

          <p className="text-lg font-medium text-gray-800 mb-4">
            Total: ${totalPrice.toFixed(2)}
          </p>

          {/* Quantity Control */}
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
              {Array.from({ length: 10 }, (_, i) => i + 28).map((size) => (
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
            Condition: <span className="font-semibold">Brand New</span>
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
