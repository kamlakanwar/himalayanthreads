"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FaBoxOpen } from "react-icons/fa";
import Link from "next/link";

type Props = {
  videoId: string;
  price: number;
};

export default function HimachaliVideoCard({ videoId, price }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
      w-full
      h-105 sm:h-150 lg:h-180
      rounded-xl
      overflow-hidden
      relative
      bg-black
    "
    >
      {/* Video */}

      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`}
        className="absolute top-0 left-0 w-full h-full object-cover"
        title="Himachali Culture"
        allow="autoplay"
      />

      {/* Product Info */}

      <div
        className="
        absolute
        bottom-16
        left-3
        right-3
        text-white
        flex
        gap-2
      "
      >
        <div className="bg-white/90 rounded-md p-1 text-black">
          <FaBoxOpen size={14} />
        </div>

        <div>
          <p
            className="
            text-xs sm:text-sm
            leading-snug
            font-medium
          "
          >
            Pure Angora Wool Himachali Maroon Color Cap |
            Traditional Pahadi Topi | Handcrafted
          </p>

          <p className="text-xs sm:text-sm font-semibold mt-1">
            RS. {price}
          </p>
        </div>
      </div>


      {/* Dropdown Panel */}

      <div
        className={`
        absolute
        bottom-7
        left-0
        w-full
        bg-white
        rounded-t-2xl
        text-black
        p-3 sm:p-4
        space-y-3
        transition-transform
        duration-300
        max-h-[80%]
        overflow-y-auto
        ${open ? "translate-y-0" : "translate-y-full"}
      `}
      >
        <div>
          <p className="text-xs font-semibold mb-1">COLOR:</p>

          <select className="w-full border rounded-md p-2 text-sm">
            <option>Gold</option>
          </select>
        </div>

        <div>
          <p className="text-xs font-semibold mb-1">
            JEWELRY MATERIAL:
          </p>

          <select className="w-full border rounded-md p-2 text-sm">
            <option>Brass</option>
          </select>
        </div>

        <div>
          <p className="text-xs font-semibold mb-1">
            JEWELRY TYPE:
          </p>

          <select className="w-full border rounded-md p-2 text-sm">
            <option>Imitation jewelry</option>
          </select>
        </div>

        <div>
          <p className="text-xs font-semibold mb-1">SIZE:</p>

          <select className="w-full border rounded-md p-2 text-sm">
            {[5, 6, 7, 8].map((size) => (
              <option key={size}>{size}</option>
            ))}
          </select>
        </div>

        <p className="text-center font-medium">
          RS. {price}
        </p>
      </div>


      {/* Bottom Bar */}

      <div className="absolute bottom-0 w-full flex">

        <Link href="/cart" className="
      flex-1
      bg-black
      text-white
      py-3 sm:py-3
      text-xs sm:text-sm
      font-medium
      border-r
      border-gray-600
      flex
      justify-center
      items-center
    ">
          Add To Cart
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="w-10 sm:w-12 bg-black text-white flex items-center justify-center"
        >
          <FiChevronDown
            size={18}
            className={`transition-transform ${open ? "rotate-180" : ""
              }`}
          />
        </button>

      </div>
    </div>
  );
}