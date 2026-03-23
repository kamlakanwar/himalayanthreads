"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import SidePanel from "./SidePanel";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiMenu,
  FiChevronDown,
  FiX,
} from "react-icons/fi";
import CartPanel from "./CartPanel";


export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openSearch, setOpenSearch] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartCount } = useCart();
  const [search, setSearch] = useState("");
  const { wishlistCount } = useWishlist();

  const toggleCategory = (name: string) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  const handleSearch = () => {
    if (!search.trim()) return;

    // ✅ 1. CLOSE PANEL
    setOpenSearch(false);

    // ✅ 2. NAVIGATE (with small delay for smooth UX)
    setTimeout(() => {
      router.push(`/search?q=${search}`);
    }, 150);
  };

  const items = [
    "CASH ON DELIVERY AVAILABLE*",
    "WELCOME TO HIMALYANTHREADS",
    "FREE DELIVERY ON ALL PREPAID ORDERS",
    "USE CODE WELCOME10 AND GET 10% OFF",
    "SHOP NEW ARRIVALS NOW",
  ];

  const loopItems = [...items, ...items, ...items];

  return (
    <div>
      {/* Announcement Bar */}
      <div className="bg-black text-white text-xs py-3 overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={60}
          loop
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          freeMode
          className="announcementSwiper"
        >
          {loopItems.map((text, i) => (
            <SwiperSlide key={i} className="!w-auto">
              <p className="flex items-center whitespace-nowrap gap-2">

                <span>{text}</span>

                {/* Add SHOP NOW only for specific items */}
                {text !== "CASH ON DELIVERY AVAILABLE*" &&
                  text !== "WELCOME TO HIMALYANTHREADS" && (
                    <span className="underline cursor-pointer hover:text-gray-300">
                      SHOP NOW
                    </span>
                  )}

                {/* separator dot */}
                <span className="mx-20 w-1 h-1 bg-white rounded-full"></span>

              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


      {/* Navbar */}

      <header className="border-b">

        <div className="w-full mx-auto px-4 lg:px-10 flex items-center justify-between py-3">

          {/* LEFT */}
          <div className="flex items-center gap-4">
            <FiSearch
              className="text-xl cursor-pointer hover:text-(--color-red)"
              onClick={() => {
                setOpenSearch(true);
                router.push("/search")
              }
              }
            />
          </div>

          {/* SEARCH DRAWER */}
          <div
            className={`fixed top-0 right-0 h-full w-100 bg-white shadow-xl z-50 transform transition-transform duration-300 ${openSearch ? "translate-x-0" : "translate-x-full"
              }`}
          >
            {/* HEADER */}
            <div className="flex items-center justify-between py-5 px-6">
              <p className="text-xs text-gray-500">
                WHAT ARE YOU LOOKING FOR?
              </p>

              <FiX
                className="text-xl cursor-pointer"
                onClick={() => setOpenSearch(false)}
              />
            </div>

            {/* SEARCH INPUT */}
            <div className="flex items-center border-b pb-2 px-6">
              <input
                type="text"
                placeholder="Search Products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                className="w-full outline-none text-lg"
              />

              <FiSearch
                className="text-lg cursor-pointer"
                onClick={handleSearch}
              />
            </div>

            {/* DISCOVER */}
            <div className="px-6">
              <p className="text-xs text-gray-400 my-4">DISCOVER</p>

              <ul className="space-y-3 text-gray-700">
                <Link href="/collections">
                  <li className="cursor-pointer underline">Best Seller</li>
                </Link>
                <li className="cursor-pointer underline">Himachali Caps</li>
                <li className="cursor-pointer underline">Stoles</li>
                <li className="cursor-pointer underline">Accessories</li>
                <li className="cursor-pointer underline">Mufflers</li>
                <li className="cursor-pointer underline">Kalgi</li>
              </ul>
            </div>
          </div>

          {/* CENTER MENU */}
          <div className="hidden lg:flex items-center gap-8 font-bold">

            <div className="group relative cursor-pointer">

              <Link
                href="/"
                className={`transition-colors duration-300
      ${pathname === "/"
                    ? "text-(--color-red)"
                    : "text-black group-hover:text-(--color-red)"
                  }
    `}
              >
                Home
              </Link>

              <div
                className={`h-0.5 origin-left transition-transform duration-300
      ${pathname === "/"
                    ? "bg-(--color-red) scale-x-100"
                    : "bg-(--color-red) scale-x-0 group-hover:scale-x-100"
                  }
    `}
              />

            </div>

            <div className="group z-10 cursor-pointer">

              <Link
                href="/shop"
                className={`transition-colors duration-300
      ${pathname === "/shop"
                    ? "text-(--color-red)"
                    : "text-black group-hover:text-(--color-red)"
                  }
    `}
              >
                Shop <FiChevronDown size={14} className="inline" />
              </Link>

              <div
                className={`h-0.5 origin-left transition-transform duration-300
      ${pathname === "/shop"
                    ? "bg-(--color-red) scale-x-100"
                    : "bg-(--color-red) scale-x-0 group-hover:scale-x-100"
                  }
    `}
              />

              {/* MEGA MENU */}
              <div className="absolute left-0 right-0 w-full bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

                <div className="max-w-350 mx-auto px-6 py-15 grid grid-cols-5 gap-8">

                  <Link href="/collections" className="text-center">
                    <div className="relative w-full h-40">
                      <Image
                        src="/images/cap.png"
                        alt="Himachali Caps"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-3 font-semibold">HIMACHALI CAPS</h3>
                    <p className="text-sm text-gray-500">39 Items</p>
                  </Link>

                  <Link href="/collections" className="text-center">
                    <div className="relative w-full h-40">
                      <Image
                        src="/images/stole.png"
                        alt="Stoles"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-3 font-semibold">STOLES</h3>
                    <p className="text-sm text-gray-500">28 Items</p>
                  </Link>

                  <Link href="/collections" className="text-center">
                    <div className="relative w-full h-40">
                      <Image
                        src="/images/jewelry.png"
                        alt="Jewelry"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-3 font-semibold">JEWELRY & ACCESSORIES</h3>
                    <p className="text-sm text-gray-500">42 Items</p>
                  </Link>

                  <Link href="/collections" className="text-center">
                    <div className="relative w-full h-40">
                      <Image
                        src="/images/kalgi.png"
                        alt="Kalgi"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-3 font-semibold">KALGI</h3>
                    <p className="text-sm text-gray-500">23 Items</p>
                  </Link>

                  <Link href="/collections" className="text-center">
                    <div className="relative w-full h-40">
                      <Image
                        src="/images/muffler.png"
                        alt="Mufflers"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-3 font-semibold">MUFFLERS</h3>
                    <p className="text-sm text-gray-500">10 Items</p>
                  </Link>

                </div>
              </div>
            </div>

            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={100}
                height={100}
              />
            </Link>

            <div className="group relative cursor-pointer">

              <Link
                href="/about"
                className={`transition-colors duration-300
      ${pathname === "/about-us"
                    ? "text-(--color-red)"
                    : "text-black group-hover:text-(--color-red)"
                  }
    `}
              >
                About Us
              </Link>

              <div
                className={`h-0.5 origin-left transition-transform duration-300
      ${pathname === "/about-us"
                    ? "bg-(--color-red) scale-x-100"
                    : "bg-(--color-red) scale-x-0 group-hover:scale-x-100"
                  }
    `}
              />

            </div>

            <div className="group relative cursor-pointer">

              <Link
                href="/contact"
                className={`transition-colors duration-300
      ${pathname === "/contact"
                    ? "text-(--color-red)"
                    : "text-black group-hover:text-(--color-red)"
                  }
    `}
              >
                Contact Us
              </Link>

              <div
                className={`h-0.5 origin-left transition-transform duration-300
      ${pathname === "/contact"
                    ? "bg-(--color-red) scale-x-100"
                    : "bg-(--color-red) scale-x-0 group-hover:scale-x-100"
                  }
    `}
              />

            </div>

          </div>


          {/* MOBILE LOGO */}
          <div className="lg:hidden">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={90}
              height={90}
              priority
              style={{ width: "auto", height: "auto" }}
            />
          </div>


          {/* RIGHT */}
          <div className="flex items-center gap-5">

            <Link href="/login">
              <FiUser className="text-xl cursor-pointer hover:text-(--color-red)" />
            </Link>

            <Link href="/wishlist">
              <div className="relative">

                <FiHeart className="text-xl cursor-pointer hover:text-(--color-red)" />

                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-(--color-red) text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                    {wishlistCount}
                  </span>
                )}

              </div>
            </Link>

            <div
              className="relative"
              onClick={(e) => {
                e.stopPropagation();
                setIsCartOpen(true);
              }}
            >
              <FiShoppingCart className="text-xl cursor-pointer hover:text-(--color-red)" />

              <span
                className="absolute -top-2 -right-2 bg-(--color-red) text-white text-[10px]
    w-4 h-4 flex items-center justify-center rounded-full"
              >
                {cartCount ?? 0}
              </span>
            </div>

            {isCartOpen && (
              <CartPanel setIsCartOpen={setIsCartOpen} />
            )}

            <RxHamburgerMenu
              className="text-2xl text-black cursor-pointer hidden md:block"
              onClick={() => setOpen(true)}
            />

            <SidePanel open={open} setOpen={setOpen} />

            <FiMenu
              className="text-2xl text-black cursor-pointer lg:hidden"
              onClick={() => setOpenMenu(true)}
            />

          </div>

        </div>

      </header>

      {/* MOBILE MENU */}

      <div
        className={`fixed top-0 left-0 h-full w-[320px] bg-white z-50 transition-transform duration-300
        ${openMenu ? "translate-x-0" : "-translate-x-full"} lg:hidden`}
      >

        <div className="flex justify-between items-center p-4 border-b">
          <Image
            src="/images/logo.png"
            alt="logo"
            height={100}
            width={100}
            style={{ width: "auto", height: "auto" }}
          />

          <button onClick={() => setOpenMenu(false)}>
            ✕
          </button>

        </div>


        <div className="p-4 text-[15px]">

          <div className="py-3 border-b font-semibold">
            Best Seller
          </div>


          {/* Caps */}

          <div className="border-b">

            <div
              className="flex justify-between py-3 font-semibold cursor-pointer"
              onClick={() => toggleCategory("caps")}
            >
              Himachali Caps
              <span>{openCategory === "caps" ? "-" : "+"}</span>
            </div>

            {openCategory === "caps" && (
              <div className="pl-3 pb-3 flex flex-col gap-2 text-sm">

                <span>All Himachali Caps</span>
                <span>Cap Combo</span>
                <span>Budget Pack</span>
                <span>Kinnauri</span>
                <span>Kullu Cap</span>

              </div>
            )}

          </div>


          {/* Stoles */}

          <div className="border-b">

            <div
              className="flex justify-between py-3 font-semibold cursor-pointer"
              onClick={() => toggleCategory("stoles")}
            >
              Stoles
              <span>{openCategory === "stoles" ? "-" : "+"}</span>
            </div>

            {openCategory === "stoles" && (
              <div className="pl-3 pb-3 flex flex-col gap-2 text-sm">

                <span>All Stoles</span>
                <span>Premium Stole</span>
                <span>Kullu Stole</span>
                <span>Handcrafted</span>

              </div>
            )}

          </div>


          {/* Accessories */}

          <div className="border-b">

            <div
              className="flex justify-between py-3 font-semibold cursor-pointer"
              onClick={() => toggleCategory("acc")}
            >
              Accessories
              <span>{openCategory === "acc" ? "-" : "+"}</span>
            </div>

            {openCategory === "acc" && (
              <div className="pl-3 pb-3 flex flex-col gap-2 text-sm">

                <span>Cap Flower Combo</span>
                <span>Kalgi Combo</span>

              </div>
            )}

          </div>


          <div className="py-3 border-b font-semibold">
            Mufflers
          </div>

          <div className="py-3 border-b font-semibold">
            Kalgi
          </div>


          <div className="py-3 border-b text-sm">
            📞 9625570775
          </div>

          <div className="py-3 border-b text-sm">
            ✉ info.himalyanthreads@gmail.com
          </div>

          <div className="py-3 border-b text-sm">
            Login / Register
          </div>

          <div className="py-3 text-sm flex gap-6">
            INR ▾
            English ▾
          </div>

        </div>

      </div>


      {openMenu && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpenMenu(false)}
        />
      )}

    </div>

  );
}