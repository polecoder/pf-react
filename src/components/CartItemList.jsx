import CartItem from "./CartItem";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function CartItemList() {
  const cart = useContext(CartContext);
  const cartProducts = cart.cart;

  return (
    <div className="mx-auto flex w-[900px] flex-col gap-y-8">
      {cartProducts.length === 0 ? (
        <div className="text-center text-xl text-dark">
          <p>No hay productos en el carrito.</p>
        </div>
      ) : (
        cartProducts.map((product) => (
          <CartItem
            key={product.id}
            imgPath={product.img}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            id={product.id}
          />
        ))
      )}
    </div>
  );
}

export default CartItemList;
