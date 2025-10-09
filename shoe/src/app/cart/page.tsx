"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function CartPage() {
  const [order, setOrder] = useState<any>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem("order");
    const savedUser = localStorage.getItem("userDetails");
    if (savedOrder) setOrder(JSON.parse(savedOrder));
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  if (!order || !user)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-lg text-gray-600">No order found in cart.</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start pt-28 px-4 sm:px-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-3xl mt-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
          🛒 Order Summary
        </h2>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
          <Image
            src={order.image}
            alt={order.name}
            width={180}
            height={180}
            className="rounded-xl object-contain border"
          />
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">{order.name}</h3>
            <p className="text-gray-600">Quantity: {order.quantity}</p>
            <p className="text-gray-600">Size: {order.size}</p>
            <p className="text-gray-800 font-semibold mt-2">Total: ${order.price}</p>
          </div>
        </div>

        <hr className="my-4 border-gray-300" />

        <div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Customer Details</h3>
          <div className="space-y-1 text-gray-700">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <p><strong>City:</strong> {user.city}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
