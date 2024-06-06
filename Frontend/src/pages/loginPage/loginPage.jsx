import "../../sass/pages/loginPage/LoginPage.scss";
import Form from "./loginPageForm.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

/**
 * Component for the login page.
 * @returns {JSX.Element} The LoginPage component.
 */
export default function LoginPage() {
  return (
    <main className="main__LoginPage">
      <div className="main__LoginPage__Container">
        {/* User icon */}
        <FontAwesomeIcon className="title_Login_Icon" icon={faUserCircle} />
        <h1 className="main__LoginPage__Container__title">Sign In</h1>
        <Form />
      </div>
    </main>
  );
}
