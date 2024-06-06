import MainTop from "./mainTop/mainTop.jsx";
import iconChat from "../../assets/icon-chat.png";
import iconMoney from "../../assets/icon-money.png";
import iconSecurity from "../../assets/icon-security.png";
import MainFeatures from "./mainFeatures/mainFeatures.jsx";
import "../../sass/pages/homePage/HomePage.scss";

// Array of features data
const featuresArray = [
  {
    icon: iconChat,
    key: "chat",
    title: "You are our #1 priority",
    subTitle:
      "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    icon: iconMoney,
    key: "money",
    title: "More savings means higher rates",
    subTitle:
      "The more you save with us, the higher your interest rate will be!",
  },
  {
    icon: iconSecurity,
    key: "security",
    title: "Security you can trust",
    subTitle:
      "We use top-of-the-line encryption to make sure your data and money are always safe.",
  },
];

/**
 * HomePage component representing the main page of the application.
 * @returns {JSX.Element} The HomePage component.
 */
export default function HomePage() {
  return (
    <main className="main">
      <MainTop />
      <section className="main__Features">
        {featuresArray.map((feature) => (
          <MainFeatures
            key={feature.key}
            icon={feature.icon}
            title={feature.title}
            subTitle={feature.subTitle}
          />
        ))}
      </section>
    </main>
  );
}
