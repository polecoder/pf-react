import products from "../data/products";
import Counter from "./Counter";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useCount } from "../hooks/useCount";

function ItemDetail() {
  const { id } = useParams();
  const item = products.find((product) => product.id === parseInt(id));

  const max = item.stock;
  const { count, increment, decrement } = useCount(1, 1, max);

  const cart = useContext(CartContext);

  return (
    <div className="mx-auto w-[400px] bg-secondary text-light">
      <img className="h-[600px]" src={`../.${item.img}`} alt={item.name} />
      <div className="p-4 text-center">
        <h3 className="pb-3 text-xl font-bold uppercase">{item.name}</h3>
        <p>Precio: $ {item.price}</p>
      </div>
      <div className="flex justify-center gap-5 px-4 pb-4">
        <Counter
          count={count}
          increment={increment}
          decrement={decrement}
          max={max}
        />
        <button
          onClick={() => cart.addItem(item, count)}
          className="rounded-full bg-dark px-3 py-2 text-sm uppercase text-light transition-all duration-300 hover:bg-light hover:text-dark"
        >
          Agregar al carrito
        </button>
      </div>
      <p className="border-t-[1px] border-light p-2 text-center">
        Stock disponible: {item.stock}
      </p>
    </div>
  );
}

export default ItemDetail;
