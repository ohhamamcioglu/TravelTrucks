import { NavLink } from "react-router";
import Logo from "./Logo/Logo";

function Header() {
  return (
    <header className="h-18 bg-inputs px-16 grid grid-cols-3 items-center">
      <Logo />

      <nav className="flex justify-center gap-8" arial-label="Main navigation">
        <NavLink
          to="/"
          className="body-2 cursor-pointer hover:text-buttonHover"
        >
          {({ isActive }) => (
            <span className={isActive ? "text-buttonHover" : ""}>Home</span>
          )}
          
        </NavLink>
        <NavLink
          to="/catalog"
          className="body-2 cursor-pointer hover:text-buttonHover"
        >
        {({ isActive }) => (
            <span className={isActive ? "text-buttonHover" : ""}>Catalog</span>
          )}
          
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
