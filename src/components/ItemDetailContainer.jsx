import React from "react";
import products from "../data/products.json";
import Counter from "./Counter";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { id } = useParams();
  const item = products.find((product) => product.id === parseInt(id));

  return (
    <div className="ml-[200px] w-full px-12 py-6">
      <h2 className="mb-2 text-center text-3xl font-bold uppercase text-dark">
        Detalle del producto
      </h2>
      <div className="mx-auto w-[400px] bg-secondary text-light">
        <img className="h-[600px]" src={`../.${item.img}`} alt={item.name} />
        <div className="p-4 text-center">
          <h3 className="pb-3 text-xl font-bold uppercase">{item.name}</h3>
          <p>Precio: $ {item.price}</p>
        </div>
        <div className="flex justify-center gap-5 px-4 pb-4">
          <Counter max={item.stock} />
          <button className="rounded-full bg-dark px-3 py-2 text-sm uppercase text-light transition-all duration-300 hover:bg-light hover:text-dark">
            Agregar al carrito
          </button>
        </div>
        <p className="border-t-[1px] border-light p-2 text-center">
          Stock disponible: {item.stock}
        </p>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
