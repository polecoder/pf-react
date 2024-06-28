import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

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
  };

  const removeItem = (itemId) => {
    const itemToRemove = cart.find((item) => item.id === itemId);
    setTotalProducts(totalProducts - itemToRemove.quantity);
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, totalProducts }}
    >
      {children}
    </CartContext.Provider>
  );
};
