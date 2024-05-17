import { ItemListContainer } from "./components/ItemListContainer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <div className="font-body flex">
        <Navbar />
        <ItemListContainer
          greeting={"Aquí encontrarás los mejores productos de tecnología!"}
        />
      </div>
    </>
  );
}

export default App;
