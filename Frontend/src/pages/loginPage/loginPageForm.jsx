import Invalid from "./loginPageInvalid.jsx";
import { fetch_Token, fetch_UserInfos } from "../../services/login.service.js";
import { set_Login } from "../../Redux/authReducer/authSlice.js";
import { set_User } from "../../Redux/userReducer/userSlice.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Form() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [rememberCheckbox, setRememberCheckbox] = useState(false);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const TokenState = useSelector((state) => state.login.token);

  useEffect(() => {
    console.log(TokenState);
    if (TokenState) {
      navigate("/profile");
    }
  }, [TokenState, navigate]);

  /**
   * Function to handle the "Remember me" checkbox.
   */
  const handleCheck = () => {
    setRememberCheckbox(!rememberCheckbox);
  };

  /**
   * Function to handle the login form submission.
   * @param {Object} e - The form submission event.
   */
  const handle_Form = async (e) => {
    e.preventDefault();

    // Attempt to fetch a token with the provided password and email
    const token = await fetch_Token(password, email);

    // If the password or email is empty, or fetching the token fails, show an error message
    if (!password || !email || !token) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    } else {
      // If credentials are valid, dispatch the login action to update the state
      dispatch(
        set_Login({
          token: token,
          keepLogging: rememberCheckbox,
          authenticated: true,
        })
      );

      // Fetch user information using the token
      const infos = await fetch_UserInfos(token);
      const user = {
        firstName: infos.firstName,
        lastName: infos.lastName,
        id: infos.id,
      };

      // Dispatch the set user action to update user information in the state
      dispatch(set_User(user));

      // Navigate to the user's profile page
      navigate("/profile");
    }
    return;
  };

  return (
    <form onSubmit={handle_Form}>
      {/* Username input */}
      <div className="loginForm__Container">
        <label className="loginForm__Container__Label" htmlFor="userMail">
          Username
        </label>
        <input
          className="input"
          type="text"
          id="userMail"
          name="username"
          autoComplete="off"
          value={email || ""}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      {/* Password input */}
      <div className="loginForm__Container">
        <label className="loginForm__Container__Label" htmlFor="userPassword">
          Password
        </label>
        <input
          className="input"
          type="password"
          autoComplete="off"
          id="userPassword"
          name="password"
          value={password || ""}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {/* Display the Forgot component with error message if 'show' is true */}
        <Invalid show={show} />
      </div>
      {/* "Remember me" checkbox */}
      <div className="check__Container">
        <input
          className="check__Container__Input"
          type="checkbox"
          id="rememberCheckbox"
          name="Remember me"
          checked={rememberCheckbox}
          onChange={handleCheck}
        />
        <label className="check__Container__Label" htmlFor="rememberCheckbox">
          Remember me
        </label>
      </div>
      {/* Sign-in button */}
      <div className="loginButton">
        <button className="button" type="submit" onClick={handle_Form}>
          Sign in
        </button>
      </div>
    </form>
  );
}
