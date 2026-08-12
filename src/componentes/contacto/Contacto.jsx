import "./Contacto.css";
import { FaWhatsapp } from "react-icons/fa";

function Contacto() {
  const telefonoVisible = "+54 9 11 5153-7937";
  const telefonoWhatsApp = "5491151537937";

  return (
    <section className="contacto">
      <div className="contacto__container">

        <div className="contacto__header">
          <h2 className="contacto__title">
            Contacto directo
          </h2>

          <div className="contacto__line"></div>
        </div>

        <div className="contacto__content">
          <div className="contacto__info">
            <p className="contacto__description">
              Escribime por WhatsApp
              <br />
              y coordinamos tu consulta.
            </p>

            <a
              className="contacto__button"
              href={`https://wa.me/${telefonoWhatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Contactar por WhatsApp al ${telefonoVisible}`}
            >
              <FaWhatsapp />

              <span>
                {telefonoVisible}
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contacto;
