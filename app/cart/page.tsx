"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { FiGift } from "react-icons/fi";
import Link from "next/link";

export default function CartPage() {
    const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

    const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 lg:px-0">
            <h1 className="text-3xl font-bold mb-10">YOUR CART</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* ================= LEFT SIDE ================= */}
                <div className="lg:col-span-2">

                    {/* 🔥 HEADER ROW */}
                    <div className="hidden md:grid grid-cols-3 font-semibold text-md border-b pb-3 mb-6">
                        <span>Product</span>
                        <span className="text-center">Quantity</span>
                        <span className="text-right">Total</span>
                    </div>

                    {/* 🛒 CART ITEMS */}
                    <div className="space-y-6">

                        {cart.length === 0 && (
                            <p className="text-gray-500">Your cart is empty</p>
                        )}

                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="grid grid-cols-3 items-center gap-6 border-b pb-6"
                            >
                                {/* 🧾 PRODUCT */}
                                <div className="flex items-center gap-4">
                                    <div className="relative w-24 h-24">
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            fill
                                            className="object-cover rounded"
                                        />
                                    </div>

                                    <div>
                                        <h2 className="font-bold text-sm">{item.title}</h2>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-(--color-red) text-xs mt-2"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>

                                {/* 🔢 QUANTITY */}
                                <div className="flex justify-center items-center gap-3">
                                    <button
                                        onClick={() => {
                                            if (item.qty === 1) {
                                                removeFromCart(item.id);
                                            } else {
                                                decreaseQty(item.id);
                                            }
                                        }}
                                        className="px-3 py-1 border"
                                    >
                                        −
                                    </button>

                                    <span>{item.qty}</span>

                                    <button
                                        onClick={() => increaseQty(item.id)}
                                        className="border px-3 py-1"
                                    >
                                        +
                                    </button>
                                </div>

                                {/* 💰 TOTAL */}
                                <div className="text-right font-semibold">
                                    Rs. {item.price * item.qty}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= RIGHT SIDE ================= */}
                <div className="space-y-6 border p-6 rounded">

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <FiGift className="text-(--color-red) text-lg" />
                        <p>Sign Up Rs. 1.00 to save 10% for your first purchase.</p>
                    </div>

                    {/* ✏️ NOTE */}
                    <div>
                        <label className="text-sm font-semibold ">
                            Special instructions for seller
                        </label>
                        <textarea className="w-full border mt-2 p-2 text-sm" />
                    </div>

                    {/* 🎟️ COUPON */}
                    <div>
                        <h3 className="font-semibold text-sm">LIST COUPON</h3>
                        <p className="text-sm mb-2">
                            Welcome →  10% off all collections for your first purchase.
                        </p>
                        <p className="text-sm mb-2">
                            Coupon code will work on checkout page
                        </p>

                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Coupon"
                                className="flex-1 border p-2 text-sm"
                            />
                            <button className="bg-(--color-red) text-white px-4 text-sm">
                                SAVE
                            </button>
                        </div>
                    </div>

                    {/* 💵 TOTAL */}
                    <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>Rs. {total} /-</span>
                    </div>

                    <p className="text-sm text-gray-500">
                        Taxes and{" "}
                        <span className="underline">
                            <Link href="/shippingPolicy">shipping</Link>
                        </span>{" "}
                        calculated at checkout
                    </p>

                    {/* 🧾 CHECKOUT */}
                    <button className="w-full bg-(--color-red) text-white py-3 text-sm font-semibold">
                        CHECK OUT
                    </button>
                </div>
            </div>
        </div>
    );
}