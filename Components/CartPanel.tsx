"use client";

import { useCart } from "../context/CartContext";
import Image from "next/image";
import LoginPopup from "@/Components/LoginPopup";
import { useState } from "react";
import Link from "next/link";

export default function CartPanel({ setIsCartOpen }: any) {
  const [openLogin, setOpenLogin] = useState(false);

  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    totalPrice,
  } = useCart();

  return (
    <div className="fixed inset-0 z-50 flex">

      {/* Overlay */}
      <div
        className="flex-1 bg-black/40"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Side Panel */}
      <div className="w-105 h-full bg-white shadow-xl flex flex-col">

        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-xl"
          >
            ✕
          </button>
        </div>

        {/* Free Delivery */}
        <div className="px-5 py-3 text-sm text-gray-600 border-b flex items-center gap-2">
          📦 <span>Your order is free delivery !</span>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-5">
          {cart.length === 0 ? (
            <p className="py-6 text-center text-gray-500">
              Cart is empty
            </p>
          ) : (
            cart.map((item: any) => (
              <div
                key={item.id}
                className="flex gap-4 py-5 border-b"
              >
                {/* Image */}
                <div className="w-17 h-17 bg-gray-100 flex items-center justify-center rounded">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">

                  <div>
                    <p className="text-sm font-medium leading-5">
                      {item.title}
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      Rs. {item.price.toLocaleString()} × {item.qty}
                    </p>
                  </div>

                  {/* Qty + Remove */}
                  <div className="flex items-center justify-between mt-3">

                    {/* Quantity */}
                    <div className="flex items-center border rounded">

                      <button
                        onClick={() => {
                          if (item.qty === 1) {
                            removeFromCart(item.id);
                          } else {
                            decreaseQty(item.id);
                          }
                        }}
                        className="px-3 py-1 text-lg"
                      >
                        −
                      </button>

                      <span className="px-3 text-sm">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-3 py-1 text-lg"
                      >
                        +
                      </button>

                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-gray-500 underline"
                    >
                      Remove
                    </button>

                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Bottom Section */}
        <div className="border-t px-5 py-4">

          {/* Options */}
          <div className="flex justify-between text-sm text-gray-600 mb-4">
            <span>📝 Order Note</span>
            <span>🏷 Coupon</span>
            <span>📦 Shipping</span>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center font-semibold text-lg mb-1">
            <span>Total:</span>
            <span>Rs. {totalPrice.toLocaleString()}</span>
          </div>

          <p className="text-xs text-gray-500 mb-4">
            Taxes and shipping calculated at checkout
          </p>

          {/* Terms */}
          <div className="flex items-center gap-2 mb-4 text-sm">
            <input type="checkbox" className="accent-red-600 w-4 h-4" />
            <span>
              I agree with the{" "}
              <span className="underline cursor-pointer">
                terms and conditions
              </span>
            </span>
          </div>

          {/* Checkout */}
          <button
            onClick={() => setOpenLogin(true)}
            className="w-full bg-[#d46a6a] text-white py-3 tracking-widest font-medium active:bg-(--color-red)"
          >
            CHECK OUT
          </button>

          <Link href="/cart">
            <button className="w-full mt-3 text-sm underline tracking-widest cursor-pointer hover:text-(--color-red)">
              VIEW CART
            </button>
          </Link>

          {openLogin && (
            <LoginPopup setOpenLogin={setOpenLogin} />
          )}
        </div>
      </div>
    </div>
  );
}