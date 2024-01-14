import { Helmet } from "react-helmet-async";
import background from "../../assets/services/banner-background.png";
import gradientOverlay from "../../assets/images/baygrond.png";
import CsBanner from "./CsBanner/CsBanner";
import CsFeature1 from "./CsFeature1/CsFeature1";
import CsFeature2 from "./CsFeature2/CsFeature2";
import CsFeature3 from "./CsFeature3/CsFeature3";
import CsFeature4 from "./CsFeature4/CsFeature4";
import CsFeature5 from "./CsFeature5/CsFeature5";
import CsFeature6 from "./CsFeature6/CsFeature6";
import CsFeature7 from "./CsFeature7/CsFeature7";

const CyberSecurity = () => {
  return (
    <div>
      <Helmet>
        <title>Intela ~ Services ~ Cyber Security</title>
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
            <CsBanner />
          </div>
        </div>
      </div>
      <CsFeature1 />
      <CsFeature2 />
      <CsFeature3 />
      <CsFeature4 />
      <CsFeature5 />
      <CsFeature6 />
      <CsFeature7 />
    </div>
  );
};

export default CyberSecurity;
