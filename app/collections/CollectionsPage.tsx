"use client";

import products from "@/data/productsData";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import ProductCard from "@/Components/ProductCard";

type Category = keyof typeof products;

export default function CollectionsPage() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState<Category>("cap");

  const [openAvailability, setOpenAvailability] = useState(true);
  const [openPrice, setOpenPrice] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const categories: {
    id: Category;
    name: string;
    img: string;
  }[] = [
    {
      id: "cap",
      name: "Himachali Caps",
      img: "/images/cap.png",
    },
    {
      id: "stoles",
      name: "Stoles",
      img: "/images/stole.png",
    },
    {
      id: "kalgi",
      name: "Kalgi",
      img: "/images/kalgi.png",
    },
    {
      id: "jewelry",
      name: "Jewelry",
      img: "/images/jewelry.png",
    },
    {
      id: "mufflers",
      name: "Mufflers",
      img: "/images/muffler.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 overflow-auto">

      {/* ================= TOP CATEGORIES ================= */}
      <div className="flex justify-center gap-6 overflow-x-auto mb-10">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className="cursor-pointer text-center"
          >
            <div
              className={`w-45 h-45 rounded-full border-2 ${
                active === cat.id
                  ? "border-(--color-red)"
                  : "border-gray-300"
              } overflow-hidden`}
            >
              <Image
                src={cat.img}
                alt={cat.name}
                width={200}
                height={200}
                className="object-cover"
              />
            </div>

            <p className="text-lg font-semibold mt-2">
              {cat.name}
            </p>
          </div>
        ))}
      </div>

      {/* ================= MAIN ================= */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">

        {/* ================= SIDEBAR ================= */}
        <div className="md:col-span-1 p-4">

          <h3 className="font-bold text-lg mb-4">
            FILTER:
          </h3>

          <hr className="mb-4 text-gray-400" />

          {/* Availability */}
          <div className="mb-6">

            <div
              onClick={() =>
                setOpenAvailability(!openAvailability)
              }
              className="flex justify-between items-center mb-2 cursor-pointer"
            >
              <p className="font-semibold text-sm">
                AVAILABILITY
              </p>

              <FiChevronDown
                className={`text-lg transition-transform ${
                  openAvailability
                    ? "rotate-180"
                    : ""
                }`}
              />
            </div>

            {openAvailability && (
              <>
                <label className="flex items-center text-sm mb-2">
                  <input
                    type="checkbox"
                    className="mr-2 w-4 h-4"
                  />
                  In stock (10)
                </label>

                <label className="flex items-center text-sm text-gray-400">
                  <input
                    type="checkbox"
                    disabled
                    className="mr-2 w-4 h-4"
                  />
                  Out of stock (0)
                </label>
              </>
            )}
          </div>

          <hr className="mb-6 text-gray-400" />

          {/* Price */}
          <div
            onClick={() =>
              setOpenPrice(!openPrice)
            }
            className="flex justify-between items-center mb-4 cursor-pointer"
          >
            <p className="font-semibold text-sm">
              PRICE
            </p>

            <FiChevronDown
              className={`text-lg transition-transform ${
                openPrice ? "rotate-180" : ""
              }`}
            />
          </div>

          {openPrice && (
            <>
              <input
                type="range"
                min="0"
                max="1999"
                className="w-full accent-black"
              />

              <div className="flex items-center gap-3 mt-4">

                <div className="flex items-center border px-2 py-1 w-full">
                  ₹
                  <input
                    type="number"
                    value={0}
                    readOnly
                    className="w-full outline-none text-sm ml-1"
                  />
                </div>

                <div className="flex items-center border px-2 py-1 w-full">
                  ₹
                  <input
                    type="number"
                    value={1999}
                    readOnly
                    className="w-full outline-none text-sm ml-1"
                  />
                </div>

              </div>
            </>
          )}

        </div>

        {/* ================= PRODUCTS ================= */}
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">

          {products[active].map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
            />
          ))}

        </div>

      </div>
    </div>
  );
}
