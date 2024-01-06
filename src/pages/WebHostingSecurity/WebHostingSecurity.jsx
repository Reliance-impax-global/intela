import { Helmet } from "react-helmet-async";
import background from "../../assets/services/banner-background.png";
import gradientOverlay from "../../assets/images/baygrond.png";
import WhsBanner from "./WhsBanner/WhsBanner";
import WhsFeature from "./WhsFeature/WhsFeature";

const WebHostingSecurity = () => {
  return (
    <div>
      <Helmet>
        <title>Intela ~ Services ~ Web Hosting Security</title>
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
            <WhsBanner />
          </div>
        </div>
      </div>
      <WhsFeature />
    </div>
  );
};

export default WebHostingSecurity;
