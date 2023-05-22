import "./footer.scss";
import logoKasa from "./../../assets/kasa_logo_white.png";

function Footer() {
  return (
    <footer>
      <img src={logoKasa} alt="logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
