"use client";

import { useWishlist } from "@/context/WishlistContext";
import ProductCard from "@/Components/ProductCard";
import { FaCartPlus } from "react-icons/fa6";

export default function Wishlist() {

  const { wishlist } = useWishlist();

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6">
        My Wishlist
      </h1>

      {wishlist.length === 0 && (
        <p>No items in wishlist</p>
      )}

         {wishlist.length === 0 && (
        <FaCartPlus size="100" className="mx-auto my-30"/>
      )}


      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {wishlist.map((item: any) => (
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

    </div>
  );
}