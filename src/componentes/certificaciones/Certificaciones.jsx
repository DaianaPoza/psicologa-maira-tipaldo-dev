import "./Certificaciones.css";
import { LuFileBadge } from "react-icons/lu";

function Certificaciones() {
  return (
    <section className="certificaciones">
      <div className="certificaciones__container">
        <div className="certificaciones__icono" aria-hidden="true">
          <LuFileBadge />
        </div>

        <div className="certificaciones__content">
          <h2 className="certificaciones__title">
            Títulos y certificaciones
          </h2>

          <p className="certificaciones__description">
            Conocé mi formación y habilitaciones.
          </p>

          <a
            className="certificaciones__button"
            href="/certificaciones"
          >
            Ver títulos y certificaciones
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Certificaciones;