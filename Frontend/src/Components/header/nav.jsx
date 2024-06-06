import "../../sass/components/header/Nav.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { remove_User } from "../../Redux/userReducer/userSlice.js";
import { remove_Auth } from "../../Redux/authReducer/authSlice.js";

export default function Nav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.login.authenticated);
  const firstName = useSelector((state) => state.user.firstName);

  const HandleLogout = () => {
    // Gestion de la suppression de la connexion
    dispatch(remove_User());
    dispatch(remove_Auth());
    localStorage.clear();
    navigate("/login");
  };
  
  return (
    <nav className="nav">
      {isAuth ? (
        <>
          <Link to="/profile" className="header__Link">
            <FontAwesomeIcon className="visible" icon={faUserCircle} />
            <p className="header__FirstName"> {firstName}</p>
          </Link>
          <Link to="#" className="header__Link" onClick={HandleLogout}>
            <FontAwesomeIcon className="visible" icon={faSignOut} />
            Sign Out
          </Link>
        </>
      ) : (
        <Link to="/login" className="header__Link">
          <FontAwesomeIcon className="visible" icon={faUserCircle} />
          Sign In
        </Link>
      )}
    </nav>
  );
}