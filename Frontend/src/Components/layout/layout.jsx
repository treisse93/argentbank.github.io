import "../../sass/components/layout/Layout.scss";
import { Outlet } from "react-router-dom";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";

/**
 * Composant Layout qui représente la mise en page générale de l'application.
 * Il inclut un en-tête, un contenu variable (Outlet), et un pied de page.
 * @component
 */
export default function Layout() {
  return (
    <div className="layout">
      {" "}
      {/* Utilise la classe de style "layout" pour le conteneur principal */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
