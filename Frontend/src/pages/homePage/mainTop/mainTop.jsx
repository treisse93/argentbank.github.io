import "../../../sass/pages/homePage/MainTop.scss";

/**
 * Hero component displaying promoted content.
 * @returns {JSX.Element} The Hero component.
 */

export default function MainTop() {
  return (
    <div className="mainTop">
      <section className="mainTop__Content">
        <h2 className="mainTop__sr_only">Promoted Content</h2>
        <p className="mainTop__Subtitle">No fees.</p>
        <p className="mainTop__Subtitle">No minimum deposit.</p>
        <p className="mainTop__Subtitle">High interest rates.</p>
        <p className="mainTop__Text">
          Open a savings account with Argent Bank today
        </p>
      </section>
    </div>
  );
}
