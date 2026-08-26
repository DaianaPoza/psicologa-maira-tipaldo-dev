import "./Header.css";
import imagenHeader from "../../assets/imagen-header.png";

function Header() {
  return (
    <header className="header">
      <div className="header__content">

        <div className="header__info">
          <h1 className="header__title">
            Maira Luz Tipaldo
          </h1>

          <div className="header__line"></div>

          <div className="header__description">
            <p className="header__profession">
              Licenciada en Psicología
            </p>

            <p className="header__license">
              M.N. 58139
            </p>

            <div className="header__specialties">
              <p>Terapeuta Cognitiva Integrativa.</p>
              <p>Terapeuta EMDR.</p>
              <p>Terapias informadas en trauma.</p>
            </div>
          </div>
        </div>

        <div className="header__image-container">
          <img
            className="header__image"
            src={imagenHeader}
            alt="Playa tranquila con dos sillas frente al mar"
          />
        </div>

      </div>
    </header>
  );
}

export default Header;
