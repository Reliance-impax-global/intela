import { Helmet } from "react-helmet-async";
import background from "../../assets/services/banner-background.png";
import gradientOverlay from "../../assets/images/baygrond.png";
import WdBanner from "./WdBanner/WdBanner";
import WdText from "./WdText/WdText";
import WdFeature from "./WdFeature/WdFeature";

const WebDevelopment = () => {
  return (
    <div>
      <Helmet>
        <title>Intela ~ Services ~ Web Development</title>
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
            <WdBanner />
          </div>
        </div>
      </div>
      <WdText />
      <WdFeature />
    </div>
  );
};

export default WebDevelopment;
