import { Helmet } from "react-helmet-async";
import AboutBanner from "../AboutBanner/AboutBanner";
import background from "../../../assets/solution/background-img.png";
import gradientOverlay from "../../../assets/images/baygrond.png";
import OurMission from "../OurMission/OurMission";
import BestBusiness from "../BestBusiness/BestBusiness";
import CoreValues from "../CoreValues/CoreValues";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Intela ~ About</title>
      </Helmet>
      <div
        className="relative bg-cover h-screen"
        style={{
          backgroundImage: `url(${background})`,
          height: "100vh",
        }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backgroundImage: `url(${gradientOverlay})`,
            opacity: 0.97,
          }}
        >
          <div className="text-white text-center">
            <AboutBanner />
          </div>
        </div>
      </div>
      <OurMission />
      <BestBusiness />
      <CoreValues />
    </div>
  );
};

export default About;
