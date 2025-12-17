import { NavLink } from "react-router-dom";
import LogoSvg from "../../assets/TravelTrucks.svg?react";

export default function Logo({ size = 16, className = "" }) {
  return (
    <NavLink
      to="/"
      aria-label="Ana sayfa"
      className={`inline-flex ${className}`}
    >
      <LogoSvg style={{ height: size }} />
    </NavLink>
  );
}
