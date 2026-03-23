"use client";
import Image from "next/image";

export default function CultureSection() {
  const products = [
    "/images/cap.png",
    "/images/stole.png",
    "/images/cap.png",
    "/images/stole.png",
    "/images/kalgi.png",
    "/images/stole.png",
  ];

  return (
    <section className="w-full bg-gray-100 py-20 px-6 lg:px-20">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div >
          <h2 className="text-4xl lg:text-4xl font-bold leading-normal tracking-tighter">
            MORE THAN A STYLE <br />
            — IT'S A STAND FOR CULTURE
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Wearing a piece from HimalayanThreads means wearing a story. 
            It means supporting communities, conserving culture, and 
            connecting with a legacy as old as the mountains.
            Whether you're embracing the elegance of a Kullu shawl or 
            adorning your style with traditional Himachali jewelries,
            you're becoming part of a movement to keep heritage alive.
          </p>

          <button className=" w-full mt-8 bg-(--color-red) hover:bg-red-700 transition duration-300 text-white font-semibold px-8 py-4 rounded-lg hover:scale-105">
            MAKE TRADITION PART OF YOUR STYLE
          </button>

          <div className="flex items-center gap-2 mt-6 text-sm font-semibold">
            <span className="text-green-600 text-lg">✔</span>
            WE SHIP ALL OVER INDIA
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((img, index) => (
            <div
              key={index}
              className="relative w-full h-50 rounded-xl overflow-hidden shadow-md hover:scale-105 transition duration-300"
            >
              <Image
                src={img}
                alt="product"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}