import "./Header.css";
import imagenHeader from "../../assets/imagen-header.png";

function Header() {
  return (
    <header className="header">
      <div className="header__content">

        <div className="header__info">
          <h1 className="header__title">
            Maira
            <span>Tipaldo</span>
          </h1>

          <div className="header__line"></div>

          <div className="header__description">
            <p className="header__profession">
              Lic. en Psicología
            </p>

            <div className="header__specialties">
              <p>Terapeuta Cognitiva Conductual Integrativa</p>
              <p>EMDR</p>
              <p>Terapias informadas en Trauma</p>
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