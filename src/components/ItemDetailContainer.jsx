import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  return (
    <div className="ml-[200px] w-full px-12 py-6">
      <h2 className="mb-6 text-center text-3xl font-bold uppercase text-dark">
        Detalle del producto
      </h2>
      <ItemDetail />
    </div>
  );
}

export default ItemDetailContainer;
