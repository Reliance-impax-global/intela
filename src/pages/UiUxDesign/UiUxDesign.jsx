import { Helmet } from "react-helmet-async";
import background from "../../assets/services/banner-background.png";
import gradientOverlay from "../../assets/images/baygrond.png";
import UiUxBanner from "./UiUxBanner/UiUxBanner";
import UiUxText from "./UiUxText/UiUxText";
import UiUxFeature1 from "./UiUxFeature1/UiUxFeature1";
import TextTwo from "./TextTwo/TextTwo";
import FeatureTwo from "./FeatureTwo/FeatureTwo";

const UiUxDesign = () => {
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
            <UiUxBanner />
          </div>
        </div>
      </div>
      <UiUxText />
      <UiUxFeature1 />
      <TextTwo />
      <FeatureTwo />
    </div>
  );
};

export default UiUxDesign;
