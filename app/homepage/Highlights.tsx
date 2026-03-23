import Image from "next/image";

const highlights = [
  {
    img: "/images/kalgi.png",
    title: "TRENDING KALGI",
  },
  {
    img: "/images/himcap.png",
    title: "HIMACHALI CAPS COMBO",
  },
  {
    img: "/images/earrings.png",
    title: "EARRINGS",
  },
];

export default function Highlights() {
  return (
    <section className="py-20">
      
      {/* Heading */}
      <h2 className="text-center text-4xl font-bold tracking-widest mb-12">
        THIS WEEK’S HIGHLIGHTS
      </h2>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {highlights.map((item, index) => (
          <div key={index} className="text-center group cursor-pointer">

            {/* Image */}
            <div className="relative w-full h-80 overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Title */}
            <h3 className="mt-6 text-2xl font-semibold tracking-wide">
              {item.title}
            </h3>

            {/* View More */}
            <p className="text-sm mt-2 tracking-widest border-b inline-block">
              VIEW MORE
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}