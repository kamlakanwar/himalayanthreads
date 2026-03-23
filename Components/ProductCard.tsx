"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FiHeart, FiEye } from "react-icons/fi";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

type Props = {
  id: string;
  img: string;
  title: string;
  price: string;
  oldPrice: string;
};

export default function ProductCard({
  id,
  img,
  title,
  price,
  oldPrice,
}: Props) {

  const [isOpen, setIsOpen] = useState(false);
  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const inWishlist = isInWishlist(String(id));

  // 🔥 Cart logic directly here
  const {
    cart,
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  const item = cart.find((i) => i.id === String(id));
  const quantity = item?.qty || 0;

  const product = {
    id: String(id),
    img,
    title,
    price: Number(price),
  };

  const handleDecrease = () => {
    if (quantity === 1) {
      removeFromCart(String(id));
    } else {
      decreaseQty(String(id));
    }
  };

  // 🔥 Disable background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <div className="flex flex-col text-center h-full">

        {/* IMAGE */}
        <div className="relative w-full h-64 overflow-hidden group">

          <Image
            src={img}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />

          {/* ICONS */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition">

            <button
              onClick={() =>
                inWishlist
                  ? removeFromWishlist(String(id))
                  : addToWishlist(product)
              }
              className={`bg-white p-2 rounded-full cursor-pointer
              hover:bg-gray-100
                ${inWishlist ? "text-(--color-red)" : ""}
             `}
            >
              <FiHeart size={16} />
            </button>

            <button
              onClick={() => setIsOpen(true)}
              className="bg-white p-2 rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <FiEye size={16} />
            </button>

            <button className="bg-white p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <HiOutlineArrowsRightLeft size={16} />
            </button>

          </div>

        </div>

        {/* CONTENT */}
        <div className="mt-4 flex flex-col flex-1 justify-between">

          <p className="text-sm min-h-10">
            {title}
          </p>

          <div>

            <div className="space-x-2 mt-2">
              <span className="font-semibold">
                Rs. {price}
              </span>

              <span className="text-gray-400 line-through text-sm">
                Rs. {oldPrice}
              </span>
            </div>

            {/* 🔥 CART BUTTON LOGIC HERE */}
            <div className="mt-3 w-full">

              {quantity === 0 ? (

                <button
                  onClick={
                    () => addToCart(product)}
                  className="w-full bg-(--color-red) hover:bg-red-700 transition text-white py-3 text-sm font-semibold rounded-md"
                >
                  ADD TO CART
                </button>

              ) : (

                <div className="flex items-center justify-between bg-red-600 text-white px-4 py-2 rounded-md">

                  <button
                    onClick={handleDecrease}
                    className="text-lg font-bold px-2 hover:scale-110 transition"
                  >
                    −
                  </button>

                  <span className="font-semibold text-sm">
                    {quantity}
                  </span>

                  <button
                    onClick={() => increaseQty(String(id))}
                    className="text-lg font-bold px-2 hover:scale-110 transition"
                  >
                    +
                  </button>

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

      {/* MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >

          <div
            className="bg-white w-[90%] md:w-[700px] p-6 relative rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 text-lg"
            >
              ✕
            </button>

            <Image
              src={img}
              alt={title}
              width={300}
              height={300}
              className="mx-auto"
            />

            <h2 className="text-xl mt-4 text-center">
              {title}
            </h2>

            <p className="text-red-600 font-bold text-center">
              Rs. {price}
            </p>

            {/* 🔥 SAME CART LOGIC IN MODAL */}
            <div className="mt-4">

              {quantity === 0 ? (

                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-red-600 hover:bg-red-700 transition text-white py-3 text-sm font-semibold rounded-md"
                >
                  ADD TO CART
                </button>

              ) : (

                <div className="flex items-center justify-between bg-red-600 text-white px-4 py-2 rounded-md">

                  <button onClick={handleDecrease}>−</button>

                  <span>{quantity}</span>

                  <button onClick={() => increaseQty(id)}>+</button>

                </div>

              )}

            </div>

          </div>

        </div>
      )}
    </>
  );
}