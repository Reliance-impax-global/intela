import { Helmet } from "react-helmet-async";
import background from "../../assets/services/banner-background.png";
import gradientOverlay from "../../assets/images/baygrond.png";
import WdBanner from "./WdBanner/WdBanner";
import WdFeature1 from "./WdFeature1/WdFeature1";
import WdFeature2 from "./WdFeature2/WdFeature2";
import WdFeature3 from "./WdFeature3/WdFeature3";
import WdFeature4 from "./WdFeature4/WdFeature4";
import WdFeature5 from "./WdFeature5/WdFeature5";

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
          <div className="text-white text-center pb-10">
            <WdBanner />
          </div>
        </div>
      </div>
      <WdFeature1 />
      <WdFeature2 />
      <WdFeature3 />
      <WdFeature4 />
      <WdFeature5 />
    </div>
  );
};

export default WebDevelopment;
