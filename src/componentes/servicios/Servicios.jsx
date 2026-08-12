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
    descripcion:
      "Acompañamiento personalizado para tu bienestar emocional.",
  },
  {
    icono: LuUsersRound,
    titulo: "Espacios grupales comunitarios",
    descripcion:
      "Encuentros para compartir, aprender y crecer juntos.",
  },
  {
    icono: LuArmchair,
    titulo: "Espacio de supervisión para profesionales",
    descripcion:
      "Supervisión clínica y acompañamiento profesional.",
  },
  {
    icono: LuMessageCircle,
    titulo: "Orientación en intervenciones comunitarias",
    descripcion:
      "Asesoramiento y diseño de proyectos comunitarios.",
  },
];

function Servicios() {
  return (
    <section className="servicios">
      <div className="servicios__container">

        <div className="servicios__header">
          <h2 className="servicios__title">
            Servicios
          </h2>

          <div className="servicios__line"></div>
        </div>

        <div className="servicios__grid">
          {servicios.map((servicio, index) => {
            const Icono = servicio.icono;

            return (
              <article className="servicio" key={index}>
                <div className="servicio__icono">
                  <Icono />
                </div>

                <div className="servicio__content">
                  <h3 className="servicio__title">
                    {servicio.titulo}
                  </h3>

                  <p className="servicio__description">
                    {servicio.descripcion}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Servicios;