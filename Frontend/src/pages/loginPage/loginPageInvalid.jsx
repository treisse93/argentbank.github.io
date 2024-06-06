/**
 * Component for displaying an error message when credentials are invalid.
 * @param {Object} props - The component's props.
 * @param {boolean} props.show - Indicates whether to show the error message.
 * @returns {JSX.Element} The Forgot component.
 */
export default function Invalid({ show }) {
  // If 'show' prop is true, display the error message
  if (show) {
    return (
      <div className="invalid">
        <p>Vos identifiants ne sont pas valides!</p>
      </div>
    );
  }
  // If 'show' prop is false, don't render anything
  return null;
}
