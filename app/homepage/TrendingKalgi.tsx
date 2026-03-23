"use client";

import ProductCard from "@/Components/ProductCard";

export default function TrendingKalgi() {

  const products = [
    {
      id: "kalgi-1",
      img: "/images/kalgi.png",
      title:
        "RADHE RADHE KALGI FOR HIMACHALI & UTTARAKHANDI CAP – WOODEN HANDCRAFTED BROOCH WITH PEACOCK FEATHER",
      price: "249.00",
      oldPrice: "999.00",
    },
    {
      id: "kalgi-2",
      img: "/images/kalgi.png",
      title:
        "RADHE KRISHNA FLUTE KALGI – SILVER METAL BROOCH",
      price: "299.00",
      oldPrice: "999.00",
    },
    {
      id: "kalgi-3",
      img: "/images/kalgi.png",
      title:
        "HIMACHALI CAP KALGI GOLDEN CHAND",
      price: "349.00",
      oldPrice: "999.00",
    },
    {
      id: "kalgi-4",
      img: "/images/kalgi.png",
      title:
        "HANDCRAFTED SILVER KALGI",
      price: "399.00",
      oldPrice: "999.00",
    },
    {
      id: "kalgi-5",
      img: "/images/kalgi.png",
      title:
        "SILVER CHAND KALGI",
      price: "399.00",
      oldPrice: "999.00",
    },
    {
      id: "kalgi-6",
      img: "/images/kalgi.png",
      title:
        "SILVER CHAND KALGI 2",
      price: "399.00",
      oldPrice: "999.00",
    },
    {
      id: "kalgi-7",
      img: "/images/kalgi.png",
      title:
        "RADHE KRISHNA COMBO KALGI",
      price: "399.00",
      oldPrice: "999.00",
    },
    {
      id: "kalgi-8",
      img: "/images/kalgi.png",
      title:
        "KALGI FLOWER COMBO",
      price: "499.00",
      oldPrice: "1,499.00",
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-6 md:px-10 lg:px-20">

      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-semibold mb-10 tracking-wider">
        TRENDING KALGI
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">

        {products.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            oldPrice={item.oldPrice}
          />
        ))}

      </div>

    </section>
  );
}