import Logo from "../../assets/argentBankLogo.png";
import { Link } from "react-router-dom";
import Nav from "./nav.jsx";
import "../../sass/components/header/Header.scss";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__Link">
        <img src={Logo} alt="Argent Bank Logo" className="header__Logo" />
      </Link>
      <Nav />
    </header>
  );
}
