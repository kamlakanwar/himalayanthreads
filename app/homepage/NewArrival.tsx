"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";

export default function NewArrival() {
  const products = [
    {
      img: "/images/necklace2.png",
      title: "HIMACHALI TRADITIONAL GHAU NECKLACE WITH MALA",
      price: "1,999.00",
      oldPrice: "4,999.00",
    },
    {
      img: "/images/necklace2.png",
      title: "KINNAURI TARMANI NECKLACE",
      price: "1,499.00",
      oldPrice: "3,999.00",
    },
    {
      img: "/images/necklace2.png",
      title: "HIMACHALI CHANDRAHAAR",
      price: "4,999.00",
      oldPrice: "9,999.00",
    },
    {
      img: "/images/Jewelry.jpg",
      title: "HIMACHALI BRAGAR SET",
      price: "999.00",
      oldPrice: "1,999.00",
    },
    {
      img: "/images/Jewelry.jpg",
      title: "HIMACHALI KANTH MALA",
      price: "1,499.00",
      oldPrice: "3,999.00",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-10 lg:px-20">

      {/* Top text */}
      <p className="text-center text-sm tracking-widest mb-5">
        HIMACHALI JEWELRY & ACCESSORIES
      </p>

      <h2 className="text-center text-4xl font-semibold mb-10">
        NEW ARRIVAL
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">

        {/* LEFT IMAGE BIGGER */}
        <div className="relative w-full max-w-150 aspect-3/4 mx-auto">
          <Image
            src="/images/necklace1.png"
            alt="necklace"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT SWIPER */}
        <div className="relative">

          {/* Prev Button */}
          <button className="
    custom-prev 
    absolute 
    left-2 md:left-6 lg:left-30
    top-1/3 -translate-y-1/2
    z-10
    bg-gray-100
    border border-gray-300
    shadow
    rounded-full
    p-2
  ">
            <FiChevronLeft size={24} />
          </button>

          {/* Next Button */}
          <button className="
    custom-next 
    absolute 
    right-2 md:right-6 lg:right-30
    top-1/3 -translate-y-1/2
    z-10
    bg-gray-100
    border border-gray-300
    shadow
    rounded-full
    p-2
  ">
            <FiChevronRight size={24} />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            slidesPerView={1}
            loop
            className="w-full"
          >
            {products.map((item, i) => (
              <SwiperSlide key={i}>

                <div className="flex flex-col items-center text-center">

                  <div className="relative w-65 h-65">

                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />

                  </div>

                  <p className="mt-4 text-sm max-w-xs">
                    {item.title}
                  </p>

                  <div className="mt-2">
                    <span className="font-semibold">
                      Rs. {item.price}
                    </span>

                    <span className="ml-2 line-through text-gray-400 text-sm">
                      Rs. {item.oldPrice}
                    </span>
                  </div>

                  <button className="mt-4 bg-red-600 text-white px-8 py-2 text-xs font-semibold hover:bg-red-700">
                    ADD TO CART
                  </button>

                </div>

              </SwiperSlide>
            ))}
          </Swiper>

        </div>

      </div>
    </section>
  );
}