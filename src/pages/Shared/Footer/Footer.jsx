import logo from "../../../assets/images/logo.png";
import background from "../../../assets/images/background-image.png";
import gradientOverlay from "../../../assets/images/baygrond.png";
import facebook from "../../../assets/images/facebook.png";
import twitter from "../../../assets/images/twitter-.png";
import youtube from "../../../assets/images/youtube.png";
import instagram from "../../../assets/images/instagram.png";

const Footer = () => {
  return (
    <div
      className="relative bg-cover z-30 pt-20"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${gradientOverlay})`,
          opacity: 0.97,
        }}
      ></div>

      <p className="text-center text-white z-20 relative">Reach to Us</p>
      <hr />
      <div className="flex justify-between p-8 text-white relative z-10">
        <div className="w-80">
          <img className="w-44 h-11 my-20" src={logo} alt="Logo" />
          <p>
            Intela Solution Company, as a Turnkey solution provider &
            distributors delivering solution and services for enterprises with a
            broad range of solution portfolio. We provide Consultancy for your
            business.
          </p>
          <div className="flex me-20 my-10">
            <a>
              <img className="w-[30px]" src={facebook} alt="facebook" />
            </a>
            <a>
              <img className="w-[24px]" src={twitter} alt="twitter" />
            </a>
            <a>
              <img className="w-[30px]" src={youtube} alt="youtube" />
            </a>
            <a>
              <img className="w-[30px]" src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
        <div className="mt-52 w-80 ml-20">
          <h3 className="z-10 relative">Services</h3>
          <p className="z-10 relative">
            Project Consultancy Software development Unified communication
            Network & Security Digital marketing
          </p>
        </div>
        <div className="mt-52 w-80 ml-20">
          <h3 className="z-10 relative">Contact</h3>
          <p className="z-10 relative">
            Address: 108, Soi Pramote, Surawongse Road, Bangrak, Bangkok -
            10500, Thailand Phone: +6662 949-2899 Email: info@intelasolution.com
          </p>
        </div>
      </div>
      <hr />
      <p className="text-center text-white z-20 relative">
        © 2023 INTELA. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
