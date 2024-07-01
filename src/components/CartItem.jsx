import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function CartItem({ imgPath, name, price, quantity, id }) {
  const cart = useContext(CartContext);

  return (
    <div className="flex justify-between bg-secondary text-light">
      <div className="flex">
        <img src={imgPath} alt={name} className="h-[125px]" />
        <div className="my-auto w-[350px] p-4 text-xl">
          <h3 className="italic">{name}</h3>
          <p>
            UYU <span className="font-bold">${price}</span>
          </p>
        </div>
      </div>
      <button className="group" onClick={() => cart.removeItem(id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          className="transition-colors duration-300 group-hover:stroke-light"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#13293d"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 7l16 0" />
          <path d="M10 11l0 6" />
          <path d="M14 11l0 6" />
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </svg>
      </button>
      <div className="flex items-center gap-16 pr-8 text-center text-xl">
        <div>
          <p className="uppercase italic">Cantidad</p>
          <p className="bold">{quantity}</p>
        </div>
        <div className="flex w-[100px] flex-col justify-center">
          <p className="uppercase italic">Total</p>
          <p>
            UYU <span className="font-bold">${price * quantity}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
