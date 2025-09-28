"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import React from "react";

const products = [
  { id: 1, name: "Product 1", price: "$25", img: "/Images/p1.png" },
  { id: 2, name: "Product 2", price: "$30", img: "/Images/p2.png" },
  { id: 3, name: "Product 3", price: "$40", img: "/Images/p3.png" },
  { id: 4, name: "Product 4", price: "$20", img: "/Images/p4.png" },
  { id: 5, name: "Product 5", price: "$50", img: "/Images/p5.png" },
  { id: 6, name: "Product 6", price: "$28", img: "/Images/p6.jpg" },
  { id: 7, name: "Product 7", price: "$35", img: "/Images/p7.jpg" },
  { id: 8, name: "Product 8", price: "$22", img: "/Images/p8.jpg" },
  { id: 9, name: "Product 9", price: "$45", img: "/Images/p9.jpg" },
  { id: 10, name: "Product 10", price: "$55", img: "/Images/p10.jpg" },
];

function Product() {
  return (
    <section className="w-full flex justify-center py-16">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center">
        {/* Heading with View All button */}
        <div className="w-full flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">Latest Products</h2>
          <button className="text-black underline text-lg">View All</button>
        </div>

        {/* Swiper Slider */}
        <div className="w-full">
          <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={5}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="flex flex-col items-center text-center border rounded-lg shadow-sm p-4 bg-white">
                  {/* Image wrapper with hover zoom */}
                  <div className="w-[263px] h-[263px] relative overflow-hidden rounded-lg group">
                    <Image
                      src={product.img}
                      alt={product.name}
                      fill
                      className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">{product.price}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Product;
