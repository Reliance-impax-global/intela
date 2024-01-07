import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import background from "../assets/images/background-image.png";
import gradientOverlay from "../assets/images/baygrond.png";

const Main = () => {
  return (
    <div
      className="relative bg-cover z-30 "
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${gradientOverlay})`,
          opacity: 0.17,
        }}
      ></div>
      <Navbar />
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Main;
