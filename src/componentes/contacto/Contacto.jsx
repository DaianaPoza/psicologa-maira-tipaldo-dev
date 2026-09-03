import "./Contacto.css";

import { FaWhatsapp } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

function Contacto() {
  const telefonoVisible = "+54 9 11 5153-7937";
  const telefonoWhatsApp = "5491151537937";
  const email = "mai.tipaldo@gmail.com";

  const mensajeWhatsApp =
    "Hola Mai, quisiera realizar una consulta.";

  const enlaceWhatsApp =
    `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(
      mensajeWhatsApp
    )}`;

  return (
    <>
      <section className="contacto">
        <div className="contacto__container">
          <header className="contacto__header">
            <h2 className="contacto__title">
              Consultar
            </h2>

            <div
              className="contacto__line"
              aria-hidden="true"
            />
          </header>

          <div className="contacto__content">
            <div className="contacto__schedule">
              <p className="contacto__schedule-title">
                Horarios de atención
              </p>

              <p className="contacto__schedule-days">
                Lunes a viernes
              </p>

              <p className="contacto__schedule-hours">
                10 a 18 hs.
              </p>
            </div>

            <div className="contacto__actions">
              <a
                className="contacto__button"
                href={enlaceWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Contactar por WhatsApp al ${telefonoVisible}`}
              >
                <FaWhatsapp aria-hidden="true" />

                <span>{telefonoVisible}</span>
              </a>

              <a
                className="contacto__button"
                href={`mailto:${email}`}
                aria-label={`Enviar un correo electrónico a ${email}`}
              >
                <LuMail aria-hidden="true" />

                <span>{email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <a
        className="contacto__whatsapp-floating"
        href={enlaceWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Contactar por WhatsApp al ${telefonoVisible}`}
        title="Consultar por WhatsApp"
      >
        <FaWhatsapp aria-hidden="true" />
      </a>
    </>
  );
}

export default Contacto;

