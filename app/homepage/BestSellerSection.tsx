"use client";

import ProductCard from "@/Components/ProductCard";

export default function BestSellerSection() {

  const products = [
    {
      id: "best-1",
      img: "/images/cap.png",
      title:
        "AUTHENTIC MAROON HIMACHALI TWEED PATTI CAP | ALL-SEASON TRADITIONAL WOOL HEADWEAR",
      price: "999.00",
      oldPrice: "1,999.00",
    },
    {
      id: "best-2",
      img: "/images/cap.png",
      title:
        "HIMACHALI TRADITIONAL KINNAURI TOPI WITH MAROON PATTI",
      price: "1,349.00",
      oldPrice: "4,999.00",
    },
    {
      id: "best-3",
      img: "/images/cap.png",
      title:
        "KINNAURI TOPI GREEN PATTI GOLDEN CHAND",
      price: "1,349.00",
      oldPrice: "4,999.00",
    },
    {
      id: "best-4",
      img: "/images/cap.png",
      title:
        "GREEN TWEED PATTI CAP COMBO",
      price: "999.00",
      oldPrice: "2,999.00",
    },
    {
      id: "best-5",
      img: "/images/cap.png",
      title:
        "KINNAURI TOPI SILVER CHAND",
      price: "1,349.00",
      oldPrice: "4,999.00",
    },
    {
      id: "best-6",
      img: "/images/cap.png",
      title:
        "GREEN HIMACHALI CAP",
      price: "1,249.00",
      oldPrice: "1,999.00",
    },
    {
      id: "best-7",
      img: "/images/cap.png",
      title:
        "MAROON CAP PACK OF 3",
      price: "1,199.00",
      oldPrice: "2,999.00",
    },
    {
      id: "best-8",
      img: "/images/cap.png",
      title:
        "BLACK SANEEL CAP",
      price: "999.00",
      oldPrice: "1,999.00",
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-6 md:px-10 lg:px-20">

      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-semibold mb-10 tracking-wider">
        BEST SELLER
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