import { useEffect, useState } from "react";
import "../../../../sass/pages/userPage/TitleForm.scss";
import { put_UserNewInfos } from "../../../../services/login.service.js";
import { useDispatch, useSelector } from "react-redux";
import {
  set_FirstName,
  set_LastName,
} from "../../../../Redux/userReducer/userSlice.js";

export default function TitleForm({
  showSaveNameBtn,
  showCancelBtn,
  showEditNameBtn,
  showTitle,
  showForm,
  EditNameBtn,
  Cancel_Btn,
}) {
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const token = useSelector((state) => state.login.token);

  const [firstNameState, setFirstNameState] = useState(firstName);
  const [lastNameState, setLastNameState] = useState(lastName);
  const dispatch = useDispatch();

  // Function to handle updating the user's name
  async function handle_UpdateName(e) {
    e.preventDefault();
    try {
      // Call the API to update user information
      await put_UserNewInfos(token, firstNameState, lastNameState);

      dispatch(set_FirstName(firstNameState));
      dispatch(set_LastName(lastNameState));

      // Call the Cancel_Btn function to hide the form and show the title
      Cancel_Btn();
    } catch (error) {
      console.error("Failed to update user information:", error);
    }
  }

  // Update state when user data changes
  useEffect(() => {
    setFirstNameState(firstName);
    setLastNameState(lastName);
  }, [firstName, lastName]);

  const handleCancel = () => {
    setFirstNameState(firstName);
    setLastNameState(lastName);
    Cancel_Btn();
  };

  // Determine CSS classes for various elements based on their visibility
  const saveNameBtn = showSaveNameBtn === "visible" ? "visible" : "hidden";
  const title = showTitle === "visible" ? "visible " : "hidden";
  const editNameBtn = showEditNameBtn === "visible" ? "visible" : "hidden";
  const cancelBtn = showCancelBtn === "visible" ? "visible" : "hidden";
  const form = showForm === "visible" ? "visible" : "hidden";

  return (
    <>
      {/* Title and User Name */}
      <h1 className="userPageTitle">
        Welcome back
        {/* Display User Name */}
        <div id="userTitleName" className={`userTitleName ${title}`}>
          <span className="firstName">{`${firstNameState}`}&nbsp;</span>
          <span className="lastName">{`${lastNameState}`}&nbsp;!</span>
        </div>
        {/* Form for Editing User Name */}
        <form
          id="userTitleForm"
          className={`userTitleForm ${form}`}
          onSubmit={handle_UpdateName}
        >
          {/* Input Fields for First Name and Last Name */}
          <div
            id="userTitleButtonContainer"
            className="userTitleInputContainer"
          >
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="userTitleInput"
              value={firstNameState}
              onChange={(e) => {
                if (e.target.value.trim() !== "") {
                  setFirstNameState(e.target.value);
                }
              }}
            />
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="userTitleInput"
              value={lastNameState}
              onChange={(e) => {
                if (e.target.value.trim() !== "") {
                  setLastNameState(e.target.value);
                }
              }}
            />
          </div>
          {/* Buttons for Save and Cancel */}
          <div className="userTitleButtonContainer">
            <button
              key={Math.random()}
              className={`userTitleButton ${saveNameBtn}`}
              type="submit"
            >
              Save
            </button>
            <button
              key={Math.random()}
              className={`userTitleButton ${cancelBtn}`}
              type="reset"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </h1>

      {/* Edit Button */}
      <div
        id="editNameBtnContainer"
        className={`${editNameBtn} editNameBtnContainer`}
      >
        <button id="editNameBtn" className="button" onClick={EditNameBtn}>
          Edit Name
        </button>
      </div>
    </>
  );
}
