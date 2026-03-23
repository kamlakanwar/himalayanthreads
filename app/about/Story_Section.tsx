/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";

export default function Story_Section() {
  return (
    <section className="bg-white py-20 px-6">

      <div className="max-w-170 mx-auto text-center">

        {/* Logo Circle */}

        <div className="flex justify-center mb-10">
          <div className="w-44 h-44 rounded-full border-4 border-black flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Himalyan Threads"
              width={150}
              height={160}
              className="object-contain"
            />
          </div>
        </div>

        {/* Small Subtitle */}

        <p className="text-sm tracking-normal font-semibold mb-6">
          HIMALYANTHREADS' STORY
        </p>

        {/* Main Heading */}

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-relaxed mb-8">
          FROM THE SOUL OF HIMACHAL <br />
          TO THE HEART OF YOUR WARDROBE
        </h2>

        {/* Description */}

        <p className="text-gray-700 text-base leading-relaxed">
          HimalayanThreads is more than just a brand – it’s a celebration of Himachal’s soul,
          stitched into every thread, carved into every ornament, and wrapped in every shawl
          we offer. Born in the lap of the majestic Himalayas, we are dedicated to preserving
          and promoting the rich artistic legacy of Himachal Pradesh through handcrafted
          treasures. We specialize in an exclusive range of authentic Himachali caps,
          traditional Kullu shawls, Himachali jewellery, and locally handcrafted accessories.
          Each piece in our collection is meticulously curated, created by skilled artisans
          who have carried the legacy of their ancestors in every knot, weave, and design.
        </p>

      </div>

    </section>
  );
}