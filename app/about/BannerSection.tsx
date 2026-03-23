"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";

export default function BannerSection() {

  const items: string[] = [
    "✧ Jewelry Inspired by the Hills ✧",
    "✧ Authentic Kinnauri & Angora Caps ✧",
    "✧ Crafted by Artisans, Rooted in Culture ✧",
    "✧ Handwoven Kullu Shawls ✧",
    "✧ Tradition You Can Wear ✧",
  ];

  // duplicate items for smooth infinite scroll
  const loopItems = [...items, ...items, ...items];

  return (
    <section className="relative w-full">

      {/* Banner Image */}

      <div className="relative w-full h-105 sm:h-130 lg:h-160">
        <Image
          src="/images/banner.png"
          alt="banner-img"
          fill
          priority
          className="object-cover"
        />
      </div>


      {/* BLACK SCROLL BAR */}

      <div className="bg-black py-2 sm:py-3">

        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={40}
          loop={true}
          freeMode={true}
          speed={10000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          style={{ transitionTimingFunction: "linear" }}
        >

          {loopItems.map((text, i) => (
            <SwiperSlide key={i} className="!w-auto">

              <p className="text-white text-sm sm:text-base lg:text-3xl font-semibold tracking-widest uppercase whitespace-nowrap">
                {text}
              </p>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

      <div className="bg-(--color-red) py-6 sm:py-7">

        <Swiper
          dir="rtl"
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={45}
          loop={true}
          freeMode={true}
          speed={10000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          style={{ transitionTimingFunction: "linear" }}
        >

          {loopItems.map((_, i) => (
            <SwiperSlide key={i} className="!w-auto">

              <p className="text-white text-sm sm:text-base lg:text-4xl font-semibold tracking-widest uppercase whitespace-nowrap">
                Tradition in Every Thread, Heritage in Every Detail
              </p>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
}