import "../../../../sass/pages/userPage/Transactions.scss";
import { Link } from "react-router-dom";

// CountComponent is a reusable component for displaying an account's information and a link to view transactions.
export default function CountComponent({ id, count, title, balanceType }) {
  return (
    // The outer section element representing the account container.
    <section className="account">
      <div className="account__Container">
        <h3 className="account__Container__Title">{title}</h3>
        <p className="account__Container__Count">${count}</p>
        {/* Description of the account balance type */}
        <p className="account__Container__Description">{balanceType}</p>
      </div>
      <div className="account__ViewTransactionsButton">
        <Link className="account__ViewTransactionsButton__Link" to={`/account/${id}`}>
          View transactions
        </Link>
      </div>
    </section>
  );
}
