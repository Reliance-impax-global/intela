import { Helmet } from "react-helmet-async";
import background from "../../assets/services/banner-background.png";
import gradientOverlay from "../../assets/images/baygrond.png";
import PartnerBanner from "./PartnerBanner/PartnerBanner";
import PsWdService from "./PsWdService/PsWdService";
import PsAdService from "./PsAdService/PsAdService";
import PsCsService from "./PsCsService/PsCsService";

const PartnerServices = () => {
  return (
    <div>
      <Helmet>
        <title>Intela ~ Services ~ Partner Services</title>
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
          <div className="text-white text-center bg-[#021D49]">
            <PartnerBanner />
          </div>
        </div>
      </div>
      <PsWdService />
      <PsAdService />
      <PsCsService />
    </div>
  );
};

export default PartnerServices;
