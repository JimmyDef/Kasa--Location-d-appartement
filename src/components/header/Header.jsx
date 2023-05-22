import { NavLink, Link } from "react-router-dom";
import logoKasa from "./../../assets/kasa_logo_red.png";
import "./header.scss";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logoKasa} alt="logo  Kasa" />
      </Link>

      <nav>
        <ul className="uppercase ">
          <li>
            {/* Navlink pour la class default 'active" */}
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
