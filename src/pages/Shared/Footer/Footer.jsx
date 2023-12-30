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
      <div className="flex flex-col md:flex-row justify-between p-4 md:p-8 text-white relative z-10">
        <div className="w-full md:w-80 mb-8 md:mb-0">
          <img
            className="w-32 h-8 md:w-44 md:h-11 my-4 md:my-8"
            src={logo}
            alt="Logo"
          />
          <p className="text-sm md:text-base">
            Intela Solution Company, as a Turnkey solution provider &
            distributor, delivers solutions and services for enterprises with a
            broad range of solution portfolios. We provide consultancy for your
            business.
          </p>
          <div className="flex mt-4 md:mt-8">
            <a className="me-4">
              <img className="w-8 md:w-[30px]" src={facebook} alt="facebook" />
            </a>
            <a className="me-4">
              <img className="w-6 md:w-[24px]" src={twitter} alt="twitter" />
            </a>
            <a className="me-4">
              <img className="w-8 md:w-[30px]" src={youtube} alt="youtube" />
            </a>
            <a>
              <img
                className="w-8 md:w-[30px]"
                src={instagram}
                alt="instagram"
              />
            </a>
          </div>
        </div>
        <div className="w-full md:w-80 mb-8 md:mt-24 md:mb-0 ml-0 md:ml-20">
          <h3 className="text-xl md:text-2xl mb-2 md:mb-4">Services</h3>
          <p className="text-sm md:text-base mb-4 md:mb-8">
            Project Consultancy, Software development, Unified communication,
            Network & Security, Digital marketing
          </p>
        </div>
        <div className="w-full md:mt-24 md:w-80 ml-0 md:ml-20">
          <h3 className="text-xl md:text-2xl mb-2 md:mb-4">Contact</h3>
          <p className="text-sm md:text-base mb-4 md:mb-8">
            Address: 108, Soi Pramote, Surawongse Road, Bangrak, Bangkok -
            10500, Thailand
            <br />
            Phone: +6662 949-2899
            <br />
            Email: info@intelasolution.com
          </p>
        </div>
      </div>
      <hr />
      <p className="text-center text-white z-20 relative text-sm md:text-base">
        © 2023 INTELA. All rights reserved | Developed by Nizam.
      </p>
    </div>
  );
};

export default Footer;
