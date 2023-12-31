import { Helmet } from "react-helmet-async";
import background from "../../../assets/services/banner-background.png";
import gradientOverlay from "../../../assets/images/baygrond.png";
import Banner from "../Banner/Banner";
import FeatureService from "../FeatureService/FeatureService";
import ServiceBenefit from "../ServiceBenefit/ServiceBenefit";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Intela ~ Services</title>
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
            <Banner />
          </div>
        </div>
      </div>
      <div className="bg-[#091424]">
        <FeatureService />
        <ServiceBenefit />
      </div>
    </>
  );
};

export default Services;
