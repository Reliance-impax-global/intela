import { Helmet } from "react-helmet-async";
import background from "../../assets/services/banner-background.png";
import gradientOverlay from "../../assets/images/baygrond.png";
import SdBanner from "./SdBanner/SdBanner";
import SdText from "./SdText/SdText";
import SdService from "./SdService/SdService";

const SoftwareDevelopment = () => {
  return (
    <div>
      <Helmet>
        <title>Intela ~ Services ~ Software Development</title>
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
            <SdBanner />
          </div>
        </div>
      </div>
      <SdText />
      <SdService />
    </div>
  );
};

export default SoftwareDevelopment;
