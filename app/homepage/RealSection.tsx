"use client";

import HimachaliVideoCard from "./himachalSection/HimachaliVideoCard";

export default function RealSection() {
  const videos = [
    {
      videoId: "Ob_sIB2AVEo",
      title: "Pure Angora Wool Himachali Cap",
      price: "1299.00",
    },
    {
      videoId: "Q-vSVE-pol4",
      title: "Authentic Kinnauri Jhumka",
      price: "999.00",
    },
    {
      videoId: "Ob_sIB2AVEo",
      title: "Traditional Pahadi Topi",
      price: "1299.00",
    },
  ];

  return (
    <section className="py-10 lg:py-16 px-4 sm:px-6 lg:px-10">
      
      {/* Heading */}
      <h1
        className="
          text-xl
          sm:text-2xl
          lg:text-4xl
          text-center
          font-bold
          mb-8
          lg:mb-12
          tracking-tight
        "
      >
        ✨ REAL PEOPLE 🌸 REAL CULTURE 🌼 REAL STORIES ✨
      </h1>

      {/* Videos */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-4
          sm:gap-6
          lg:px-10
        "
      >
        {videos.map((item, index) => (
          <HimachaliVideoCard
            key={index}
            videoId={item.videoId}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>

    </section>
  );
}