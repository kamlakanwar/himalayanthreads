"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

export default function HeroSection() {

  const items: string[] = [
    "WELCOME TO HIMALYANTHREADS",
    "WELCOME TO HIMALYANTHREADS",
    "WELCOME TO HIMALYANTHREADS",
    "WELCOME TO HIMALYANTHREADS",
    "WELCOME TO HIMALYANTHREADS",
    "WELCOME TO HIMALYANTHREADS",
  ];

  return (
    <section className="relative w-full">

      {/* HERO SLIDER */}

      <div className="relative h-[60vh] sm:h-[70vh] lg:h-[90vh]">

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".hero-next",
            prevEl: ".hero-prev",
          }}
          loop
          className="w-full h-full"
        >
          {[1,2,3,4].map((n) => (
            <SwiperSlide key={n}>
              <Image
                src={`/images/banner_img${n}.png`}
                alt="Banner"
                fill
                priority
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Left Arrow */}

        <button
          className="hero-prev absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10
          w-10 h-10 sm:w-14 sm:h-14 rounded-full
          bg-gray-700/60 flex items-center justify-center text-white"
        >
          <FaChevronLeft />
        </button>

        {/* Right Arrow */}

        <button
          className="hero-next absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10
          w-10 h-10 sm:w-14 sm:h-14 rounded-full
          bg-gray-700/60 flex items-center justify-center text-white"
        >
          <FaChevronRight />
        </button>

      </div>


      {/* SCROLL BAR */}

      <div className="bg-(--color-red) py-2 sm:py-3">

        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={40}
          loop={true}
          speed={6000}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
        >
          {items.map((text, i) => (
            <SwiperSlide key={i} className="!w-auto">
              <p
                className="text-white
                text-sm sm:text-base lg:text-lg
                font-semibold
                tracking-widest
                uppercase
                whitespace-nowrap"
              >
                {text}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}