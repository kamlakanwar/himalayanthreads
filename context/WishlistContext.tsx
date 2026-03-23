"use client";

import { createContext, useContext, useState } from "react";

const WishlistContext = createContext<any>(null);

export const WishlistProvider = ({ children }: any) => {
  const [wishlist, setWishlist] = useState<any[]>([]);

  const addToWishlist = (product: any) => {
    const exists = wishlist.find((p) => p.id === product.id);

    if (!exists) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (id: string) => {
    setWishlist(wishlist.filter((p) => p.id !== id));
  };

  const isInWishlist = (id: string) => {
    return wishlist.some((p) => p.id === id);
  };

  // ✅ ADD THIS
  const wishlistCount = wishlist.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        wishlistCount, 
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);