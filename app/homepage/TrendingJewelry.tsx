"use client";

import ProductCard from "@/Components/ProductCard";

export default function TrendingJewelry() {

  const products = [
    {
      id: "jewel-1",
      img: "/images/Jewelry.jpg",
      title: "TRADITIONAL HIMACHALI CHANDRAHAAR",
      price: "5,999.00",
      oldPrice: "",
    },
    {
      id: "jewel-2",
      img: "/images/Jewelry.jpg",
      title: "HIMACHALI JEWELRY SET",
      price: "4,999.00",
      oldPrice: "9,999.00",
    },
    {
      id: "jewel-3",
      img: "/images/Jewelry.jpg",
      title: "CHAMPAKALI AMLI NECKLACE",
      price: "1,699.00",
      oldPrice: "3,999.00",
    },
    {
      id: "jewel-4",
      img: "/images/Jewelry.jpg",
      title: "BRAGAR SET",
      price: "999.00",
      oldPrice: "1,999.00",
    },
    {
      id: "jewel-5",
      img: "/images/Jewelry.jpg",
      title: "GHAU NECKLACE",
      price: "1,999.00",
      oldPrice: "4,999.00",
    },
    {
      id: "jewel-6",
      img: "/images/Jewelry.jpg",
      title: "KINNAURI TARMANI",
      price: "1,999.00",
      oldPrice: "4,999.00",
    },
    {
      id: "jewel-7",
      img: "/images/Jewelry.jpg",
      title: "TARMANI BLACK",
      price: "1,499.00",
      oldPrice: "4,999.00",
    },
    {
      id: "jewel-8",
      img: "/images/Jewelry.jpg",
      title: "KANTH MALA SET",
      price: "1,499.00",
      oldPrice: "3,999.00",
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-6 md:px-10 lg:px-20">

      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-semibold mb-10 tracking-wider">
        TRENDING JEWELRY
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