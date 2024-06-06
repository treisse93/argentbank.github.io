import { useState } from "react";
import "../../../../sass/pages/privateRoutes/TransactionAccount.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronDown,
  faChevronUp,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";

// Fonction Collapsible qui affiche un élément pouvant être replié/déplié
export default function TransactionAccount({
  date,
  description,
  amount,
  balance,
  notes,
  category,
  transactionType,
}) {
  const [Toggle, setToggle] = useState({
    state: false,
    direction: "down",
  });

  const handleCollapse = (e) => {
    if (!e.target && Toggle.state === true) {
      setToggle({
        state: !Toggle.state,
        direction: "down",
      });
    } else {
      setToggle({
        state: !Toggle.state,
        direction: arrowDirection,
        arrowIcon: arrowIcon,
        icon: icon,
        collapsed: collapsed,
        element: element,
      });
    }
  };

  // Détermine la direction de la flèche en fonction de l'état de Toggle
  const arrowDirection = Toggle.state === true ? "up" : "down";
  const arrowIcon = "arrowIcon";
  const collapsed = Toggle.state === true ? "expanded" : "collapsed";
  const icon = arrowDirection === "up" ? faChevronUp : faChevronDown;
  const element = document.querySelector("AccountPageDetails");

  return (
    // Transaction module section with a click event handler to toggle collapse/expand
    <section className="AccountPageDetails" onClick={handleCollapse}>
      <div className="AccountPageDetails__Container">
        <div className="AccountPageDetails__DateContainer">
          <div className="AccountPageDetails__DateContainer__Wrapper">
            {/* Arrow icon for collapsed/expanded */}
            <FontAwesomeIcon icon={icon} className={arrowIcon} />
            {/* Transaction date */}
            <p className="date">{date}</p>
          </div>
        </div>
        {/* Transaction description */}
        <div className="description">
          <p>{description}</p>
        </div>
        {/* Transaction amount */}
        <div className="amount">
          <p>{amount}</p>
        </div>
        {/* Transaction balance */}
        <div className="balance">
          <p>{balance}</p>
        </div>
      </div>
      <div className="AccountPageDetails__Collapsed">
        {/* Transaction Type */}
        <p className="transactionType">{`Transaction Type: ${transactionType}`}</p>
        {/* Transaction Category with an edit pencil icon */}
        <p className="category">
          Category: {category}
          <span className="pencilIcon">
            <FontAwesomeIcon icon={faPencil} />
          </span>
        </p>
        {/* Transaction Notes with an edit pencil icon */}
        <p className="notes">
          Notes: {notes}
          <span className="pencilIcon">
            <FontAwesomeIcon icon={faPencil} />
          </span>
        </p>
      </div>
    </section>
  );
}
