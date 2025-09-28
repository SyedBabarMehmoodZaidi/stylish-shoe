"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper CSS import karna zaroori hai
import "swiper/css";
import "swiper/css/navigation";

const products = [
  { id: 1, name: "Product 1", price: "$25", img: "/Images/featured1.jpg" },
  { id: 2, name: "Product 2", price: "$30", img: "/Images/featured2.jpg" },
  { id: 3, name: "Product 3", price: "$40", img: "/Images/featured3.jpg" },
  { id: 4, name: "Product 4", price: "$20", img: "/Images/featured4.jpg" },
  { id: 5, name: "Product 5", price: "$50", img: "/Images/featured5.jpg" },
  { id: 6, name: "Product 6", price: "$28", img: "/Images/featured6.jpg" },
  { id: 7, name: "Product 7", price: "$35", img: "/Images/featured7.jpg" },
  { id: 8, name: "Product 8", price: "$22", img: "/Images/featured8.jpg" },
  { id: 9, name: "Product 9", price: "$45", img: "/Images/featured9.jpg" },
  { id: 10, name: "Product 10", price: "$55", img: "/Images/featured10.jpg" },
];

const FeaturedProducts = () => {
  return (
    <section className="w-full py-16 px-4 flex flex-col items-center">
      {/* Heading with View All button */}
      <div className="w-full max-w-[1400px] flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold">Featured Products</h2>
        <button className="text-black underline text-lg">View All</button>
      </div>

      {/* Swiper Slider */}
      <div className="w-full max-w-[1400px] mb-16">
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={5}
          spaceBetween={20}
          centeredSlides={false}
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
                <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Two Big Images Section */}
      <div className="w-full flex flex-col md:flex-row justify-center gap-6 max-w-[1500px]">
        {/* Left Image */}
        <div className="relative w-full md:w-[712px] h-[500px] overflow-hidden rounded-lg group">
          <Image
            src="/Images/f1.png"
            alt="Minimal Collection"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start pl-8">
            <h1 className="text-3xl md:text-5xl font-bold text-black">
              Minimal Collection
            </h1>
            <button className="mt-2 text-black underline text-lg">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full md:w-[712px] h-[500px] overflow-hidden rounded-lg group">
          <Image
            src="/Images/f2.png"
            alt="Sneakers"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start pl-8">
            <h1 className="text-3xl md:text-5xl font-bold text-black">
              Sneakers
            </h1>
            <button className="mt-2 text-black underline text-lg">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
