"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function OrderPage() {
  const [order, setOrder] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    phone: "",
  });

  const router = useRouter();

  useEffect(() => {
    const savedOrder = localStorage.getItem("order");
    if (savedOrder) setOrder(JSON.parse(savedOrder));
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem("userDetails", JSON.stringify(formData));
    router.push("/cart");
  };

  if (!order)
    return (
      <p className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        No order found.
      </p>
    );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800">
          Order Form
        </h2>

        {/* Product Summary */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10">
          <div className="flex-shrink-0">
            <Image
              src={order.image}
              alt={order.name}
              width={180}
              height={180}
              className="rounded-xl object-cover w-40 h-40 sm:w-44 sm:h-44 mx-auto sm:mx-0"
            />
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
              {order.name}
            </h3>
            <p className="text-gray-600">
              Quantity: <span className="font-medium">{order.quantity}</span>
            </p>
            <p className="text-gray-600">
              Size: <span className="font-medium">{order.size}</span>
            </p>
            <p className="text-gray-800 font-semibold mt-2">
              Total: ${order.total}
            </p>
          </div>
        </div>

        {/* User Details Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />

          <input
            type="text"
            placeholder="Address"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            required
          />

          <input
            type="text"
            placeholder="City"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
            value={formData.city}
            onChange={(e) =>
              setFormData({ ...formData, city: e.target.value })
            }
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
          />

          <button
            type="submit"
            className="bg-black text-white font-semibold py-3 rounded-full hover:bg-gray-800 transition duration-200"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
}
