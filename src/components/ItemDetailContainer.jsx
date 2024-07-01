import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../secrets/configFirebase";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const docRef = doc(db, "productos", id);
    getDoc(docRef).then((doc) => {
      if (doc.exists()) {
        setItem({ id: doc.id, ...doc.data() });
      }
    });
  });

  return (
    <div className="ml-[200px] w-full px-12 py-6">
      <h2 className="mb-6 text-center text-3xl font-bold uppercase text-dark">
        Detalle del producto
      </h2>
      {item && <ItemDetail item={item} />}
    </div>
  );
}

export default ItemDetailContainer;
