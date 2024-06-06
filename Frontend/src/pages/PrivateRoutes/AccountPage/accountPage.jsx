import "../../../sass/pages/privateRoutes/AccountPage.scss";
import TransactionAccount from "./transactionAccount/transactionAccount";

// Sample data for transactions

const Datas = [
  {
    date: "June 20th, 2020",
    description: "Golden Sun Bakery",
    amount: "5.00",
    balance: "2,082.79",
    category: "Food",
    transactionType: "Electronic",
    notes: "",
    id: 1,
  },
  {
    date: "June 20th, 2020",
    description: "Golden Sun Bakery",
    amount: "5.00",
    balance: "2,082.79",
    category: "Food",
    transactionType: "Electronic",
    notes: "",
    id: 2,
  },
  {
    date: "June 20th, 2020",
    description: "Golden Sun Bakery",
    amount: "5.00",
    balance: "2,082.79",
    category: "Food",
    transactionType: "Electronic",
    notes: "",
    id: 3,
  },
  {
    date: "June 20th, 2020",
    description: "Golden Sun Bakery",
    amount: "5.00",
    balance: "2,082.79",
    category: "Food",
    transactionType: "Electronic",
    notes: "",
    id: 4,
  },
  {
    date: "June 20th, 2020",
    description: "Golden Sun Bakery",
    amount: "5.00",
    balance: "2,082.79",
    category: "Food",
    transactionType: "Electronic",
    notes: "",
    id: 5,
  },
  {
    date: "June 20th, 2020",
    description: "Golden Sun Bakery",
    amount: "5.00",
    balance: "2,082.79",
    category: "Food",
    transactionType: "Electronic",
    notes: "",
    id: 6,
  },
];

export default function AccountPage() {
  return (
    <main className="accountPageMain">
      <section className="accountPageMain__Top">
        <p className="accountPageMain__Title">Argent Bank Checking (x8349)</p>
        <p className="accountPageMain__Amount">$ 2,082.79</p>
        <p className="accountPageMain__BalanceType">Available Balance</p>
      </section>
      <section className="accountPageMain__Transaction">
        <div className="accountPageMain__Transaction__Header">
          {/* Transaction table headers */}
          <h2 className="accountPageMain__Transaction__Header__Details">
            Date
          </h2>
          <h2 className="accountPageMain__Transaction__Header__Details">
            Description
          </h2>
          <h2 className="accountPageMain__Transaction__Header__Details">
            Amount
          </h2>
          <h2 className="accountPageMain__Transaction__Header__Details">
            Balance
          </h2>
        </div>
        {/* Mapping through the transaction data and rendering TransactionAccount components */}
        {Datas.map((obj) => {
          return (
            <TransactionAccount
              key={obj.id}
              id={obj.id}
              date={obj.date}
              description={obj.description}
              amount={obj.amount}
              balance={obj.balance}
              category={obj.category}
              transactionType={obj.transactionType}
            />
          );
        })}
      </section>
    </main>
  );
}
