import { Helmet } from "react-helmet-async";
import background from "../../../assets/solution/background-img.png";
import gradientOverlay from "../../../assets/images/baygrond.png";
import ApplicationBanner from "../ApplicationBanner/ApplicationBanner";
import FirstFeature from "../FirstFeature/FirstFeature";
import Embrace from "../Embrace/Embrace";
import SecondFeature from "../SecondFeature/SecondFeature";
const Application = () => {
  return (
    <div>
      <Helmet>
        <title>Intela ~ Solution ~ Application</title>
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
            <ApplicationBanner />
          </div>
        </div>
      </div>
      <FirstFeature />
      <Embrace />
      <SecondFeature />
    </div>
  );
};

export default Application;
