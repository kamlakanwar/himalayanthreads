"use client";

import Link from "next/link";

export default function LoginPopup({ setOpenLogin }: any) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setOpenLogin(false)}
      />

      {/* Popup */}
      <div className="relative bg-white w-96 p-6 rounded-xl shadow-xl">

        {/* Close */}
        <button
          onClick={() => setOpenLogin(false)}
          className="absolute top-2 right-3 text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-center">
          HimalyanThreads
        </h2>

        <h3 className="text-lg mt-4 text-center">
          Sign in
        </h3>

        <p className="text-gray-500 text-sm text-center">
          Sign in or create an account
        </p>

        <Link href="/">
          <button className="w-full mt-6 py-3 text-white bg-purple-600 rounded-lg">
            Continue with shop
          </button>
        </Link>

        <div className="flex items-center my-5">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <span className="mx-3 text-gray-400 text-sm">or</span>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-md"
        />

        <button className="w-full mt-4 py-3 bg-black text-white rounded-lg">
          Continue
        </button>

      </div>
    </div>
  );
}