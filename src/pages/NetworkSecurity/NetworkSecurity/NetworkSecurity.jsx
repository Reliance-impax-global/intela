import { Helmet } from "react-helmet-async";
import NetworkBanner from "../NetworkBanner/NetworkBanner";
import background from "../../../assets/solution/background-img.png";
import gradientOverlay from "../../../assets/images/baygrond.png";
import MakeSecured from "../MakeSecured/MakeSecured";
import Products from "../Products/Products";

const NetworkSecurity = () => {
  return (
    <div>
      <Helmet>
        <title>Intela ~ Network & Security</title>
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
            <NetworkBanner />
          </div>
        </div>
      </div>
      <MakeSecured />
      <Products />
    </div>
  );
};

export default NetworkSecurity;
