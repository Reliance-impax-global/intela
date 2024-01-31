import logo from "../../../assets/images/logo.png";
import background from "../../../assets/images/background-image.png";
import gradientOverlay from "../../../assets/images/baygrond2.png";
import facebook from "../../../assets/images/facebook.png";
import twitter from "../../../assets/images/twitter-.png";
import youtube from "../../../assets/images/youtube.png";
import instagram from "../../../assets/images/instagram.png";

const Footer = () => {
  return (
    <div
      className="relative bg-cover z-30 pt-20 pl-10"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${gradientOverlay})`,
          opacity: 0.9,
        }}
      ></div>

      <hr className="border-t-2 border-white my-4" />
      <p className="text-center text-white z-20 relative">Reach to Us</p>
      <div className="flex flex-col md:flex-row justify-between p-4 md:p-8 text-white relative z-10">
        <div className="w-full md:w-80 mb-8 md:mb-0">
          <img
            className="w-40 h-10 md:w-44 md:h-11 my-4 md:my-8 z-50"
            src={logo}
            alt="Logo"
          />
          <p className="text-sm md:text-base">
            Intela Solution Company, as a Turnkey solution provider &
            distributor, delivers solutions and services for enterprises with a
            broad range of solution portfolios. We provide consultancy for your
            business.
          </p>
          <div className="flex items-center mt-4 md:mt-8">
            <a
              className="me-4 hover:animate-pulse"
              href="https://web.facebook.com/people/Intela-Solution/100082929652175/"
            >
              <img className="w-8 md:w-[30px]" src={facebook} alt="facebook" />
            </a>
            <a className="me-4 hover:animate-pulse" href="#">
              <img className="w-6 md:w-[20px]" src={twitter} alt="twitter" />
            </a>
            <a className="me-4 hover:animate-pulse" href="#">
              <img className="w-8 md:w-[38px]" src={youtube} alt="youtube" />
            </a>
            <a className="hover:animate-pulse" href="#">
              <img
                className="w-8 md:w-[35px]"
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
      <hr className="border-t-2 border-white my-4" />
      <p className="text-center text-white z-20 relative text-sm md:text-base pb-5">
        © 2023 INTELA. All rights reserved | Developed by Nizam.
      </p>
    </div>
  );
};

export default Footer;
