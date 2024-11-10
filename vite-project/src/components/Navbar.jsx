import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="navbar">
        <nav>
          <ul>
            <li>
              <Link to="/">Штутгарт</Link>
            </li>
            <li>
              <Link to="blogs">Карлсруе</Link>
            </li>
            <li>
              <Link to="contact">Фрайбург</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
