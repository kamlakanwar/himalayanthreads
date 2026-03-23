"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function Footer() {
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  return (
    <footer className="bg-[#171717] text-gray-300 pt-10">

      {/* MAIN FOOTER */}
      <div className="
        max-w-full mx-auto 
        px-6 lg:px-20 
        py-12 
        grid grid-cols-1 lg:grid-cols-5 
        gap-y-10 lg:gap-y-12 
        text-left lg:text-center
      ">

        {/* INFORMATION */}
        <div className="border-b border-gray-700 pb-4 lg:border-none">
          <div
            className="flex justify-between items-center lg:block cursor-pointer"
            onClick={() => toggle("info")}
          >
            <h3 className="text-sm tracking-widest font-bold text-white">
              INFORMATION
            </h3>
            <span className="lg:hidden">
              {open === "info" ? <FiMinus /> : <FiPlus />}
            </span>
          </div>

          <ul className={`mt-4 space-y-3 text-md ${
            open === "info" ? "block" : "hidden"
          } lg:block`}>
            <li><Link href="/about" className="hover:text-(--color-red)">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-(--color-red)">Contact Us</Link></li>
            <li><Link href="/contactInfo" className="hover:text-(--color-red)">Contact Information</Link></li>
          </ul>
        </div>

        {/* TERMS */}
        <div className="border-b border-gray-700 pb-4 lg:border-none">
          <div
            className="flex justify-between items-center lg:block cursor-pointer"
            onClick={() => toggle("terms")}
          >
            <h3 className="text-sm tracking-widest font-bold text-white">
              TERMS & POLICIES
            </h3>
            <span className="lg:hidden">
              {open === "terms" ? <FiMinus /> : <FiPlus />}
            </span>
          </div>

          <ul className={`mt-4 space-y-3 text-md ${
            open === "terms" ? "block" : "hidden"
          } lg:block`}>
             <li><Link href="/privacyPolicy" className="hover:text-(--color-red)">Privacy Policy</Link></li>
            <li><Link href="/termsOfService" className="hover:text-(--color-red)">Terms of Service</Link></li>
            <li><Link href="/shippingPolicy" className="hover:text-(--color-red)">Shipping Policy</Link></li>
            <li><Link href="/refundPolicy" className="hover:text-(--color-red)">Refund Policy</Link></li>
            <li><Link href="/disclaimer" className="hover:text-(--color-red)">Disclaimer</Link></li>
          </ul>
        </div>

        {/* STAY CONNECTED */}
        <div className="lg:w-xs border-b border-gray-700 pb-6 lg:border-none">
          <h2 className="text-xl lg:text-2xl font-semibold text-white mb-4">
            STAY CONNECTED
          </h2>

          <p className="text-sm mb-5">
            Be the first to hear about our latest launches, exclusive offers and limited-edition collaborations
          </p>

          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-3 border border-gray-500 bg-transparent mb-4"
          />

          <button className="w-full bg-(--color-red) text-white px-5 py-3 text-xs cursor-pointer">
            SUBSCRIBE
          </button>

          <div className="flex gap-6 mt-5 text-lg justify-center">
            <FaFacebookF />
            <FaInstagram />
          </div>
        </div>

        {/* DISCOVER */}
        <div className="border-b border-gray-700 pb-4 lg:border-none">
          <div
            className="flex justify-between items-center lg:block cursor-pointer"
            onClick={() => toggle("discover")}
          >
            <h3 className="text-sm tracking-widest font-bold text-white">
              DISCOVER
            </h3>
            <span className="lg:hidden">
              {open === "discover" ? <FiMinus /> : <FiPlus />}
            </span>
          </div>

          <ul className={`mt-4 space-y-3 text-md ${
            open === "discover" ? "block" : "hidden"
          } lg:block`}>
            <li><Link href="/collections" className="hover:text-(--color-red)">Best Seller</Link></li>
            <li><Link href="/caps" className="hover:text-(--color-red)">Himachali Caps</Link></li>
            <li><Link href="/stoles" className="hover:text-(--color-red)">Stoles</Link></li>
            <li><Link href="/accessories" className="hover:text-(--color-red)">Accessories</Link></li>
            <li><Link href="/mufflers" className="hover:text-(--color-red)">Mufflers</Link></li>
            <li><Link href="/kalgi" className="hover:text-(--color-red)">Kalgi</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="pb-4">
          <div
            className="flex justify-between items-center lg:block cursor-pointer"
            onClick={() => toggle("contact")}
          >
            <h3 className="text-sm font-bold tracking-widest text-white">
              CONTACT US
            </h3>
            <span className="lg:hidden">
              {open === "contact" ? <FiMinus /> : <FiPlus />}
            </span>
          </div>

          <div className={`mt-4 text-md ${
            open === "contact" ? "block" : "hidden"
          } lg:block`}>
             <p className="text-md leading-7">
            1st floor, F-426, Phase 8B, Industrial Area, Sector 91, Sahibzada Ajit Singh Nagar, Punjab 140307
          </p>
            <p className="mt-2">+91 000000000</p>
            <p className="mt-2">info@site.com</p>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-700 py-5 px-6 text-sm text-center lg:text-left">
        © 2026, <span className="font-semibold">HimalyanThreads</span>. All Rights Reserved.
      </div>

      <div className="bg-gray-700 text-center text-sm py-3">
        © 2026, HimalyanThreads and Home Decor. All Rights Reserved.
      </div>

    </footer>
  );
}