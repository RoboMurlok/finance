import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <div className="hero">
        <div className="boxHero">
          <h1>
            Planificación financiera clara y accesible para tus objetivos
            personales
          </h1>
          <h2>
            Acompañamiento profesional para organizar tu presupuesto, definir
            prioridades y tomar decisiones informadas sobre el uso de tus
            recursos.
          </h2>
          <Link to="/service" className="btn">
            Agendar una consulta
          </Link>
        </div>
      </div>
      <div className="filosofia">
        <h3>Nuestra Filosofía</h3>
      </div>
      <div className="cards">
        <div className="card">"Soluciones Adaptadas a Ti."</div>
        <div className="card">"Lenguaje Sencillo, Estrategias Claras."</div>
        <div className="card">"Tu Tranquilidad, Nuestra Prioridad."</div>
      </div>
      <div className="filosofia">
        <h3>Así Podemos Ayudarte</h3>
        <div className="cards">
          <div className="card ver">
            <img src="src/assets/cellular-outline.svg" alt="" />
            <h4>Planificación Personal</h4>
            <p>Ayudamos a definir y alcanzar tus objetivos económicos.</p>
            <Link to="/service" className="btn">
              Ver Servicios
            </Link>
          </div>
          <div className="card ver">
            <img src="src/assets/business-outline.svg" alt="" />
            <h4>Gestión de Presupuestos</h4>
            <p>Optimiza tus ingresos y gastos para un mayor ahorro.</p>
            <Link to="/service" className="btn">
              Ver Servicios
            </Link>
          </div>
          <div className="card ver">
            <img src="src/assets/1.svg" alt="" />
            <h4>Estrategias Patrimoniales</h4>
            <p>Desarrollamos un enfoque para el crecimiento de tu capital.</p>
            <Link to="/service" className="btn">
              Ver Servicios
            </Link>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <img src="src/assets/call-outline.svg" alt="" />
            <h4>Orientación informativa</h4>
            <p>
              Te proporcionamos información útil para que puedas tomar
              decisiones bien fundamentadas.
            </p>
            <Link to="/service" className="btn">
              Agendar una consulta
            </Link>
          </div>
          <div className="card">
            <img src="src/assets/person-outline.svg" alt="" />
            <h4>Sobre el especialista</h4>
            <p>
              Creamos juntos un sistema financiero claro para gestionar tus
              recursos sin estrés
            </p>
            <Link to="/service" className="btn">
              Agendar una consulta
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
