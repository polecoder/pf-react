import Item from "./Item";
import data from "../data/products.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function ItemListContainer() {
  const category = useParams().id;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      setProducts(data.filter((product) => product.category === category));
    } else {
      setProducts(data);
    }
  }, [category]);

  return (
    <div className="ml-[200px] w-full px-12 py-6">
      <h2 className="mb-2 text-center text-3xl font-bold uppercase text-dark">
        Descubre nuestro catálogo
      </h2>
      <div className="mx-auto grid max-w-[1200px] grid-cols-3 gap-x-8 gap-y-12 px-4 pt-4">
        {products.map((product) => (
          <Item key={product.id} id={product.id} />
        ))}
      </div>
    </div>
  );
}
