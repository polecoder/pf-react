import { CartWidget } from "./CartWidget";

export function Navbar() {
  return (
    <>
      <nav className="bg-dark text-light flex h-full min-h-lvh w-[200px] flex-col justify-between px-4 py-6">
        <h1 className="font-logo p-2 text-center text-3xl">Poleshop</h1>
        <ul className="flex flex-col gap-2 p-2">
          <a className="hover:text-accent transition-all duration-200" href="#">
            <li className="p-1 text-sm">Monitores</li>
          </a>
          <a className="hover:text-accent transition-all duration-200" href="#">
            <li className="p-1 text-sm">Periféricos</li>
          </a>
          <a className="hover:text-accent transition-all duration-200" href="#">
            <li className="p-1 text-sm">Componentes de PC</li>
          </a>
          <a className="hover:text-accent transition-all duration-200" href="#">
            <li className="p-1 text-sm">Streaming</li>
          </a>
        </ul>
        <CartWidget />
      </nav>
    </>
  );
}
