"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface CartContextType {
  cart: CartItem[];
  history: CartItem[];
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [history, setHistory] = useState<CartItem[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedHistory = localStorage.getItem("history");
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedHistory) setHistory(JSON.parse(savedHistory));
  }, []);

  // Save to localStorage when changed
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("history", JSON.stringify(history));
  }, [cart, history]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      } else {
        return [...prev, item];
      }
    });

    setHistory((prev) => [...prev, item]);
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, history, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
