import "../../../sass/pages/homePage/MainFeatures.scss";

/**
 * HomeFeature component displaying a feature with an icon, title, and subtitle.
 * @param {Object} props - The component's props.
 * @param {string} props.icon - The icon image URL.
 * @param {string} props.title - The title of the feature.
 * @param {string} props.subTitle - The subtitle of the feature.
 * @returns {JSX.Element} The HomeFeature component.
 */
export default function MainFeatures({ icon, title, subTitle }) {
  // Extract the type from the icon URL
  const type = icon.split("-")[1].split(".")[0];

  return (
    <div className="MainFeatures__Item">
      <img src={icon} alt={`${type} icon`} className="MainFeatures__Icon" />
      <h3 className="MainFeatures__Title">{title}</h3>
      <p className="MainFeatures__Subtitle">{subTitle}</p>
    </div>
  );
}
