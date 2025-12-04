import React from "react";

import { Link } from "react-router-dom";

export default function Service() {
  return (
    <main>
      <div className="hero service">
        <div className="boxHero">
          <h1>Nuestros Servicios de Asesoramiento Financiero</h1>
          <h2>
            Te acompañamos en cada paso hacia la estabilidad y el crecimiento
            económico.
          </h2>
          <Link to="/service" className="btn">
            Agendar una consulta
          </Link>
        </div>
      </div>
      <div className="filosofia">
        <h1>Servicios</h1>
      </div>
      <div className="cards">
        <div className="card">
          <h2>Análisis de tu situación economica</h2>
          <p>
            Revisamos tus gastos, hábitos y metas para ofrecer una visión clara
            y estructurada.
          </p>
          <Link to="/service" className="btn">
            Agendar una consulta
          </Link>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <h2>Organización del presupuesto</h2>
          <p>
            Te acompañamos en la creación de un sistema sencillo para gestionar
            tus recursos de forma equilibrada.
          </p>
          <Link to="/service" className="btn">
            Agendar una consulta
          </Link>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <h2>Definición de objetivos</h2>
          <p>
            Te ayudamos a priorizar lo importante y a planificarlo paso a paso.
          </p>
          <Link to="/service" className="btn">
            Agendar una consulta
          </Link>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <h2>Orientación informativa</h2>
          <p>
            Te proporcionamos información útil para que puedas tomar decisiones
            bien fundamentadas.
          </p>
          <Link to="/service" className="btn">
            Agendar una consulta
          </Link>
        </div>
      </div>
      <div className="filosofia">
        <h2>Beneficios</h2>
      </div>
      <div className="cards">
        <div className="card">
          <p>Mayor claridad en el manejo de tus recursos </p>
          <p>Gestión equilibrada y transparente</p>
          <p>Decisiones informadas</p>
          <p>Enfoque estructurado hacia tus metas</p>
          <p>Acompañamiento profesional</p>
          <Link to="/service" className="btn">
            Agendar una consulta
          </Link>
        </div>
      </div>
    </main>
  );
}
