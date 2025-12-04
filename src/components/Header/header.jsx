import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const activePage = ({ isActive }) => (isActive ? "active" : "");

  return (
    <header>
      <div className="logo">
        <img src="src/assets/shield_icon_136213.svg" alt="" />
        protector
      </div>
      <nav>
        <NavLink to="/" className={activePage}>
          Inicio
        </NavLink>
        <NavLink to="service" className={activePage}>
          Servicios
        </NavLink>
        {/* <Link to="service" className="btn">
          Inscríbete para una consulta
        </Link> */}
      </nav>
    </header>
  );
}
