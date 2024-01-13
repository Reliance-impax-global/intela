import { Helmet } from "react-helmet-async";
import background from "../../assets/services/banner-background.png";
import gradientOverlay from "../../assets/images/baygrond.png";
import AdBanner from "./AdBanner/AdBanner";
import AdFeature1 from "./AdFeature1/AdFeature1";
import AdFeature2 from "./AdFeature2/AdFeature2";
import AdFeature3 from "./AdFeature3/AdFeature3";
import AdFeature4 from "./AdFeature4/AdFeature4";

const AppDevelopment = () => {
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
            <AdBanner />
          </div>
        </div>
      </div>
      <AdFeature1 />
      <AdFeature2 />
      <AdFeature3 />
      <AdFeature4 />
    </div>
  );
};

export default AppDevelopment;
