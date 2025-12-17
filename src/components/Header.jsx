import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo";

function Header() {
  return (
    <header className="h-18 bg-inputs px-16 grid grid-cols-3 items-center">
      <Logo />

      <nav
        className="flex justify-center gap-8"
        arial-label="Main navigation"
      >
        <NavLink
          to="/"
          className="body-2 cursor-pointer hover:text-buttonHover"
        >
          Home
        </NavLink>
        <NavLink
          to="/"
          className="body-2 cursor-pointer hover:text-buttonHover"
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
