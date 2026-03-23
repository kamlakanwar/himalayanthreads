"use client";

import ProductCard from "@/Components/ProductCard";

export default function PremiumStoles() {

  const products = [
    {
      id: "stole-1",
      img: "/images/stole.png",
      title:
        "WOMEN PREMIUM KINNAURI PATTI WOOLEN STOLE - 100% PURE WITH INTRICATE EMBROIDERY (DETAILING) ON ALL FOUR SIDES (UNISEX)",
      price: "1,199.00",
      oldPrice: "3,800.00",
    },
    {
      id: "stole-2",
      img: "/images/stole.png",
      title:
        "WOMEN PREMIUM KINNAURI PATTI WOOLEN STOLE - 100% PURE WITH INTRICATE EMBROIDERY (DETAILING) ON ALL FOUR SIDES (UNISEX)",
      price: "1,199.00",
      oldPrice: "3,800.00",
    },
    {
      id: "stole-3",
      img: "/images/stole.png",
      title:
        "WOMEN PREMIUM KINNAURI PATTI WOOLEN STOLE",
      price: "1,199.00",
      oldPrice: "3,800.00",
    },
    {
      id: "stole-4",
      img: "/images/stole.png",
      title:
        "WOOLEN STOLE PREMIUM",
      price: "1,199.00",
      oldPrice: "3,899.00",
    },
    {
      id: "stole-5",
      img: "/images/stole.png",
      title:
        "PURE WOOL STOLE",
      price: "1,199.00",
      oldPrice: "3,899.00",
    },
    {
      id: "stole-6",
      img: "/images/stole.png",
      title:
        "WOOL STOLE",
      price: "799.00",
      oldPrice: "2,800.00",
    },
    {
      id: "stole-7",
      img: "/images/stole.png",
      title:
        "KULLU STOLE",
      price: "599.00",
      oldPrice: "1,550.00",
    },
    {
      id: "stole-8",
      img: "/images/stole.png",
      title:
        "KINNAURI STOLE",
      price: "799.00",
      oldPrice: "2,800.00",
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-6 md:px-10 lg:px-20">

      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-semibold mb-10 tracking-wider">
        PREMIUM STOLES
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