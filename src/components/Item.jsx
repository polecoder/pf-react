import products from "../data/products.json";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Item({ id }) {
  const item = products.find((product) => product.id === id);
  const category = useParams().id;

  const imgPath = category ? `../.${item.img}` : item.img;

  return (
    <div className="w-[333px] bg-secondary">
      <img src={imgPath} alt={item.name} className="h-[500px]" />
      <div className="px-1 py-3 text-center text-light">
        <div className="pb-3">
          <h3 className="pb-4 text-base font-bold uppercase">{item.name}</h3>
          <p>Stock disponible: {item.stock}</p>
          <p>Precio: $ {item.price}</p>
        </div>
        <Link
          to={`/item/${item.id}`}
          className="rounded-full bg-light px-3 py-2 text-sm uppercase text-dark transition-all duration-300 hover:bg-dark hover:text-light"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
}

export default Item;
