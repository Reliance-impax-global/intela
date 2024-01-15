import { Helmet } from "react-helmet-async";
import background from "../../../assets/solution/background-img.png";
import gradientOverlay from "../../../assets/images/baygrond.png";
import SolutionBanner from "../SolutionBanner/SolutionBanner";
import ExclusiveValue from "../ExclusiveValue/ExclusiveValue";
import MicroTeam from "../MicroTeam/MicroTeam";
import FeatureSolution from "../FeatureSolution/FeatureSolution";
import Client from "../Client/Client";
import FgProduct from "../../Solution/FgProduct/FgProduct";
import Articles from "../../Solution/Articles/Articles";
import TrCompanies from "../../Solution/TrCompanies/TrCompanies";

const UnifiedCommunication = () => {
  return (
    <div>
      <Helmet>
        <title>Intela ~ Unified Communication</title>
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
            <SolutionBanner />
          </div>
        </div>
      </div>
      <ExclusiveValue />
      <FgProduct />
      <MicroTeam />
      <Articles />
      <TrCompanies />
      <FeatureSolution />
      <Client />
    </div>
  );
};

export default UnifiedCommunication;
