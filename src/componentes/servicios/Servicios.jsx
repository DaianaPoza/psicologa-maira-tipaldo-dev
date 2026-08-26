import "./Servicios.css";

import {
  LuUserRound,
  LuUsersRound,
  LuArmchair,
  LuMessageCircle,
} from "react-icons/lu";

const servicios = [
  {
    icono: LuUserRound,
    titulo: "Terapia individual",
  },
  {
    icono: LuUsersRound,
    titulo: "Espacios grupales comunitarios",
  },
  {
    icono: LuArmchair,
    titulo: "Espacio de supervisión para profesionales",
  },
  {
    icono: LuMessageCircle,
    titulo: "Orientación en intervenciones comunitarias",
  },
];

function Servicios() {
  return (
    <section className="servicios">
      <div className="servicios__container">
        <header className="servicios__header">
          <h2 className="servicios__title">Servicios</h2>

          <div
            className="servicios__line"
            aria-hidden="true"
          />
        </header>

        <div className="servicios__list">
          {servicios.map((servicio) => {
            const Icono = servicio.icono;

            return (
              <article
                className="servicio"
                key={servicio.titulo}
              >
                <div
                  className="servicio__icono"
                  aria-hidden="true"
                >
                  <Icono />
                </div>

                <h3 className="servicio__title">
                  {servicio.titulo}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Servicios;
