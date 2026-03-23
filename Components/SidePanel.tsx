"use client";

import Image from "next/image";
import Link from "next/link";

export default function SidePanel({ open, setOpen }: any) {
  const images = [
    { img: "/images/kalgi.png" },
    { img: "/images/himcap.png" },
    { img: "/images/earrings.png" },
    { img: "/images/cap.png" },
    { img: "/images/stole.png" },
    { img: "/images/kalgi.png" },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-88 bg-white shadow-xl transform transition-transform duration-300 z-50 ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Close Button */}
        <button
          className="cursor-pointer m-5 text-lg"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
        <Image
          src="/images/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="mx-auto w-auto h-auto"
        />

        {/* Content */}
        <div className="p-6 text-center">
          {/* Title */}
          <h3 className="font-semibold text-lg mb-4">
            HIMALYAN THREADS
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-6">
            HimalayanThreads is more than just a brand — it’s a celebration of
            Himachal’s soul, stitched into every thread, carved into every
            ornament, and wrapped in every shawl we offer.
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            {images.map((item, index) => (
              <div
                key={index}
                className="relative w-full h-16 overflow-hidden rounded-md"
              >
                <Image
                  src={item.img}
                  alt="image"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="mt-6 space-y-2 text-sm">
            <Link href="collections">
              <p className="cursor-pointer hover:text-(--color-red) mb-2">Best Seller</p>
            </Link>
            <p className="cursor-pointer hover:text-(--color-red)">Himachali Caps</p>
            <p className="cursor-pointer hover:text-(--color-red)">Stoles</p>
            <p className="cursor-pointer hover:text-(--color-red)">Accessories</p>
            <p className="cursor-pointer hover:text-(--color-red)">Mufflers</p>
            <p className="cursor-pointer hover:text-(--color-red)">Kalgi</p>
          </div>

          {/* Contact */}
          <div className="mt-6 text-sm text-gray-600">
            <p>📞 00000 00000</p>
            <p>✉ info.himalyanthreads@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}