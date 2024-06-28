import { ItemListContainer } from "./components/ItemListContainer";
import { Navbar } from "./components/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "./css/output.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <div className="flex font-body">
        <BrowserRouter>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
