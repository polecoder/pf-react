import CartItem from "./CartItem";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import CartItemList from "./CartItemList";

function Brief() {
  const cart = useContext(CartContext);

  const cartProducts = cart.cart;

  return (
    <div className="ml-[200px] w-full px-12 py-6">
      <h2 className="mb-6 text-center text-3xl font-bold uppercase text-dark">
        Detalles de la compra
      </h2>
      <div className="mx-auto flex w-[1500px]">
        <CartItemList />
        {cartProducts.length > 0 && (
          <div className="h-fit bg-secondary p-16 text-center text-light">
            <h3 className="text-3xl uppercase italic">Precio final</h3>
            <p className="text-xl">
              UYU:{" "}
              <span className="font-bold">
                $
                {cartProducts.reduce(
                  (acc, product) => acc + product.price * product.quantity,
                  0,
                )}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Brief;
