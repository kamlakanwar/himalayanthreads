import HimachaliVideoCard from "./HimachaliVideoCard";
import Image from "next/image";

export default function HimachaliTrendSection() {
  const videos = [
    {
      videoId: "Q-vSVE-pol4",
      title: "Pure Angora Wool Himachali Cap",
      price: "799.00",
    },
    {
      videoId: "Q-vSVE-pol4",
      title: "Authentic Kinnauri Jhumka",
      price: "999.00",
    },
    {
      videoId: "Q-vSVE-pol4",
      title: "Traditional Pahadi Topi",
      price: "3999.00",
    },
  ];

  const categories = [
    {
      title: "HIMACHALI CAPS",
      items: "39 Items",
      img: "/images/cap.png",
    },
    {
      title: "STOLES",
      items: "28 Items",
      img: "/images/stole.png",
    },
    {
      title: "KALGI",
      items: "23 Items",
      img: "/images/kalgi.png",
    },
    {
      title: "JEWELRY & ACCESSORIES",
      items: "42 Items",
      img: "/images/jewelry.png",
    },
  ];

  return (
    <section className="py-12 lg:py-16">

      {/* Heading */}

      <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center font-semibold mb-10 lg:mb-12">
        STEP INTO THE HEART OF HIMACHAL
      </h1>


      {/* Video Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-10">

        {videos.map((item, index) => (
          <HimachaliVideoCard
            key={index}
            videoId={item.videoId}
            price={item.price}
          />
        ))}

      </div>



      {/* Categories */}

      <div className="mt-16 lg:mt-24 px-4 sm:px-6 lg:px-16">

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">

          {categories.map((cat, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer"
            >

              {/* Image */}
              <div className="relative w-full h-56 sm:h-64 lg:h-80 overflow-hidden rounded-3xl">

                <Image
                  src={cat.img}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

              </div>

              {/* Title */}
              <h3 className="mt-5 text-base lg:text-xl font-semibold tracking-wide">
                {cat.title}
              </h3>

              {/* Items */}
              <p className="text-gray-500 text-sm mt-1">
                {cat.items}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}