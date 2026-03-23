"use client";

import { useParams } from "next/navigation";
import productsData from "@/data/productsData";
import Image from "next/image";

export default function ProductPage() {
  const params = useParams();

  const id = Array.isArray(params.id)
    ? params.id[0]
    : params.id;

  let product: any = null;

  Object.values(productsData).forEach((category: any) => {
    const found = category.find(
      (item: any) => item.id === id
    );

    if (found) {
      product = found;
    }
  });

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 p-10">

      {/* image */}
      <div>
        <Image
          src={product.img}
          alt=""
          width={600}
          height={600}
          className="w-full"
        />
      </div>

      {/* details */}
      <div>

        <h1 className="text-3xl font-bold">
          {product.title}
        </h1>

        <p className="text-xl mt-2">
          Rs. {product.price}
        </p>

        <button className="bg-red-600 text-white px-6 py-3 mt-4">
          ADD TO CART
        </button>

      </div>
    </div>
  );
}