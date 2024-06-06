import "../../sass/pages/ErrorPage.scss";

/**
 * ErrorPage component for displaying error messages.
 * @param {Object} props - The component's props.
 * @param {string} props.error - The error code (e.g., '404').
 * @param {string} props.message - The error message.
 * @returns {JSX.Element} The ErrorPage component.
 */
export default function ErrorPage({
  error = "404",
  message = "Oops! This page is currently unavailable",
}) {
  const number = [...error]; //split the error code into an array of characters

  return (
    <div className="errorPage">
      <div className="errorPage__Container">
        <h1 className="errorPage__Title">
          {number.map(
            (
              n,
              index //nuanced colors for each letters
            ) => (
              <span key={index} className="number">
                {n}
              </span>
            )
          )}
        </h1>
        <p className="errorPage__Message">{message}</p> {/* Error message */}
      </div>
    </div>
  );
}
