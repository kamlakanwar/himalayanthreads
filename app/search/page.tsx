"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import productsData from "@/data/productsData";
import Image from "next/image";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const [search, setSearch] = useState(query);

  // 🧠 UPDATE WHEN URL CHANGES
  useEffect(() => {
    setSearch(query);
  }, [query]);

  // 🔄 OBJECT → ARRAY
  const allProducts = Object.values(productsData).flat();

  // 🔍 FILTER
  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">

      <h1 className="text-2xl text-center py-6 font-semibold">
        SEARCH PRODUCTS
      </h1>

      {/* INPUT */}
      <div className="max-w-xl mx-auto px-6">
        <div className="flex items-center border-b pb-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-lg"
          />
          <FiSearch className="text-xl" />
        </div>
      </div>

      {/* RESULTS */}
      <p className="text-center text-gray-500 mt-4">
        {filteredProducts.length} Results Found
      </p>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image
                src={product.img}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition"
              />
            </div>

            <h3 className="text-sm mt-2 font-medium">
              {product.title}
            </h3>

            <p className="text-gray-700 font-semibold">
              Rs. {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}