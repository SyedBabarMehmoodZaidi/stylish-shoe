"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full flex justify-center py-36 px-4 ">
        <div className="max-w-[1700px] grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Big Image */}
          <div className="relative w-full max-w-[837px] h-auto mx-auto overflow-hidden group">
            <Image
              src="/Images/heroshoe1.png"
              alt="Stylish Shoes for Women"
              width={837}
              height={722}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Text Overlay */}
            <div className="absolute bottom-10 left-6 md:left-8 text-black">
              <h1 className="text-2xl md:text-4xl font-bold mb-3">
                Stylish Shoes for Women
              </h1>
              <button className="text-black font-medium mt-1">Shop Now</button>
              <div className="w-20 h-[2px] bg-black mt-2"></div>
            </div>
          </div>

          {/* Right Side Images */}
          <div className="flex flex-col gap-6">
            {/* Second Image */}
            <div className="relative w-full max-w-[808px] h-auto mx-auto overflow-hidden group">
              <Image
                src="/Images/heroshoe2.png"
                alt="Sports Wear"
                width={808}
                height={342}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Text Overlay */}
              <div className="absolute bottom-6 left-6 text-black">
                <h1 className="text-xl md:text-3xl font-bold mb-3">
                  Sports Wear
                </h1>
                <button className="text-black font-medium mt-1">Shop Now</button>
                <div className="w-20 h-[2px] bg-black mt-2"></div>
              </div>
            </div>

            {/* Third Image */}
            <div className="relative w-full max-w-[808px] h-auto mx-auto overflow-hidden group">
              <Image
                src="/Images/heroshoe3.png"
                alt="Fashion Shoes"
                width={808}
                height={309}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Text Overlay */}
              <div className="absolute bottom-6 left-6 text-black">
                <h1 className="text-xl md:text-3xl font-bold mb-3">
                  Fashion Shoes
                </h1>
                <button className="text-black font-medium mt-1">Shop Now</button>
                <div className="w-20 h-[2px] bg-black mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discount Section */}
      <section className="w-full flex justify-center px-4">
        <div className="w-[1359px] bg-[#F1F1F1] flex flex-col md:flex-row justify-between items-center gap-8 py-12 px-8">
          {/* Left Side */}
          <div className="md:pl-6 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-3">
              10% OFF Discount Coupons
            </h1>
            <p className="text-gray-700">
              Subscribe us to get 10% OFF on all the purchases.
            </p>
          </div>

          {/* Right Side */}
          <div className="w-[628px] h-[259px] flex flex-col justify-center items-center">
            {/* Big Text */}
            <span className="text-[#E1E1E1] text-[100px] md:text-[120px] font-bold leading-none mb-6">
              10% OFF
            </span>

            {/* Button under text */}
            <button className="bg-black text-white px-8 py-3 font-medium">
              EMAIL ME
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
