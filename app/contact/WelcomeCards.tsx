"use client";

import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "Welcome",
    desc: "We're your destination for",
    image: "/images/cap.png",
    rotate: "rotate-6",
  },
  {
    id: 2,
    title: "to",
    desc: "authentic",
    image: "/images/jewelry.jpg",
    rotate: "-rotate-6",
  },
  {
    id: 3,
    title: "HimalyanThreads",
    desc: "Himachali elegance.",
    image: "/images/stole.png",
    rotate: "rotate-6",
  },
];

export default function WelcomeCards() {
  return (
    <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-8 py-10 bg-gray-100">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`bg-white p-3 rounded-xs shadow-xl w-80 transform ${card.rotate} hover:rotate-0 transition duration-300`}
        >
          {/* Image */}
          <div className="relative w-full h-60 overflow-hidden">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold">{card.title}</h2>
            <p className="text-gray-500 text-sm mt-4">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}