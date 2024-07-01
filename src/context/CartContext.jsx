import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const initialTotalProducts = initialCart.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  const [cart, setCart] = useState(initialCart);
  const [totalProducts, setTotalProducts] = useState(initialTotalProducts);

  const addItem = (item, quantity) => {
    const newItem = { ...item, quantity };
    const newCart = [...cart];
    const isInCart = newCart.find((item) => item.id === newItem.id);

    if (isInCart) {
      isInCart.quantity += newItem.quantity;
    } else {
      newCart.push(newItem);
    }
    setTotalProducts(totalProducts + newItem.quantity);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeItem = (itemId) => {
    const itemToRemove = cart.find((item) => item.id === itemId);
    setTotalProducts(totalProducts - itemToRemove.quantity);
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const clear = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, totalProducts }}
    >
      {children}
    </CartContext.Provider>
  );
};
