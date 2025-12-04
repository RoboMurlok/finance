import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="up">
        <div className="cards icons">
          <Link to="/service">
            <img src="src/assets/logo-instagram.svg" alt="" />
          </Link>
          <Link to="/service">
            <img src="src/assets/logo-twitter.svg" alt="" />
          </Link>
          <Link to="/service">
            <img src="src/assets/logo-facebook.svg" alt="" />
          </Link>
        </div>
        {/* <div className="box">
          <h4>Da el primer paso hacia una gestión financiera más ordenada.</h4>
          <Link to="/service" className="btn">Agendar una consulta</Link>
        </div> */}
      </div>
      <div className="down">
        © 2025 artcas.beauty. Todos los derechos reservados.
      </div>
    </footer>
  );
}
