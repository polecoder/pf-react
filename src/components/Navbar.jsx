import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";

export function Navbar() {
  return (
    <>
      <nav className="fixed">
        <div className="flex h-full min-h-lvh w-[200px] flex-col justify-between bg-dark px-4 py-6 text-light">
          <Link to="/">
            <h1 className="p-2 text-center text-3xl">Poleshop</h1>
          </Link>
          <ul className="flex flex-col gap-2 p-2">
            <Link
              className="transition-all duration-200 hover:text-accent"
              to="/"
            >
              <li className="p-1 text-sm">Todos</li>
            </Link>
            <Link
              className="transition-all duration-200 hover:text-accent"
              to="/category/canguros"
            >
              <li className="p-1 text-sm">Canguros</li>
            </Link>
            <Link
              className="transition-all duration-200 hover:text-accent"
              to="/category/camperas"
            >
              <li className="p-1 text-sm">Camperas</li>
            </Link>
            <Link
              className="transition-all duration-200 hover:text-accent"
              to="/category/camisas"
            >
              <li className="p-1 text-sm">Camisas</li>
            </Link>
          </ul>
          <CartWidget />
        </div>
      </nav>
    </>
  );
}
