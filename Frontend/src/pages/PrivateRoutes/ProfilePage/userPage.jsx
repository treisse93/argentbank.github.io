import "../../../sass/pages/userPage/UserPage.scss";
import { useState } from "react";
import CountComponent from "./transactions/transaction.jsx";
import TitleForm from "./titleForm/titleForm.jsx";

// Sample account data
const accounts = [
  {
    id: 1,
    title: "Argent Bank Checking (x8349)",
    amount: "2,082.79",
    balanceType: "Available Balance",
  },
  {
    id: 2,
    title: "Argent Bank Savings (x6712)",
    amount: "10,928.42",
    balanceType: "Available Balance",
  },
  {
    id: 3,
    title: "Argent Bank Credit Card (x8349)",
    amount: "184.30",
    balanceType: "Current Balance",
  },
];

export default function UserPage() {
  // State variables to control the visibility of buttons and forms
  const [showSaveNameBtn, setShowSaveNameBtn] = useState("hidden");
  const [showCancelBtn, setShowCancelBtn] = useState("hidden");
  const [showEditNameBtn, setShowEditNameBtn] = useState("visible");
  const [showTitle, setShowTitle] = useState("visible");
  const [showForm, setShowForm] = useState("hidden");

  // Function to handle the "Edit" button click
  function handle_EditNameBtn() {
    setShowSaveNameBtn("visible");
    setShowCancelBtn("visible");
    setShowEditNameBtn("hidden");
    setShowTitle("hidden");
    setShowForm("visible");
  }

  // Function to handle the "Cancel" button click
  function handle_Cancel_Btn() {
    setShowSaveNameBtn("hidden");
    setShowCancelBtn("hidden");
    setShowEditNameBtn("visible");
    setShowTitle("visible");
    setShowForm("hidden");
  }

  return (
    <main className="UserPageMain">
      <div className="UserPageTop">
        {/* Render the TitleForm component with conditional visibility */}
        <TitleForm
          showSaveNameBtn={showSaveNameBtn}
          showCancelBtn={showCancelBtn}
          showEditNameBtn={showEditNameBtn}
          showTitle={showTitle}
          showForm={showForm}
          EditNameBtn={handle_EditNameBtn}
          Cancel_Btn={handle_Cancel_Btn}
        />
      </div>

      {/* Map through the account data and render CountComponent for each account */}
      {accounts.map((account) => (
        <CountComponent
          key={account.id}
          id={account.id}
          count={account.amount}
          title={account.title}
          balanceType={account.balanceType}
        />
      ))}
    </main>
  );
}
