"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  id: string;
  img: string;
  title: string;
  price: number;
  qty: number;
};

type CartContextType = {
  cart: CartItem[];
  cartCount: number;
  totalPrice: number;
  addToCart: (product: Omit<CartItem, "qty">) => void;
  removeFromCart: (id: string) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // ✅ cart count
  const cartCount = cart.reduce(
    (acc, item) => acc + item.qty,
    0
  );

  // ✅ add item
  const addToCart = (
    product: Omit<CartItem, "qty">
  ) => {
    if (!product?.id) return;

    setCart((prev) => {
      const exist = prev.find(
        (item) => item.id === product.id
      );

      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          qty: 1,
        },
      ];
    });
  };

  // ✅ remove
  const removeFromCart = (id: string) => {
    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // ✅ increase
  const increaseQty = (id: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: item.qty + 1,
            }
          : item
      )
    );
  };

  // ✅ decrease
  const decreaseQty = (id: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1
          ? {
              ...item,
              qty: item.qty - 1,
            }
          : item
      )
    );
  };

  // ✅ total price
  const totalPrice = cart.reduce(
    (acc, item) =>
      acc + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        totalPrice,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ✅ safe hook
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "error"
    );
  }

  return context;
};