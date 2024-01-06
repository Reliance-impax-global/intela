import uiuxBannerImg from "../../../assets/uiux-design/uiux-banner.png";
import unlockExclusive from "../../../assets/images/mobile 1.png";

const UiUxBanner = () => {
  return (
    <>
      <div className="mx-4 md:mx-8 sm:mt-2 lg:mx-20 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={unlockExclusive}
            alt=""
            className="mb-4 md:mb-0 md:mr-4 mx-auto md:mx-0 w-[20px] md:w-[80px]"
            style={{ maxWidth: "100%" }}
          />

          <div>
            <h1
              className="text-xl font-extrabold text-[#BD981B] md:text-4xl lg:text-5xl"
              style={{ fontFamily: "Abhaya Libre ExtraBold" }}
            >
              CEHPOINT
            </h1>
          </div>
        </div>
        <h2 className="text-left font-bold text-sm md:text-2xl lg:text-3xl mb-5">
          OUR TRUSTED SERVICE PROVIDER FOR COMPREHENSIVE IT SOLUTION
        </h2>
      </div>
      <div className="relative bg-[#f7efef1a] z-30 mx-4 md:mx-8 lg:mx-20">
        <div className="flex flex-col md:flex-row justify-between items-center h-full">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <img
              src={uiuxBannerImg}
              alt="hero-image"
              className="w-full h-full object-cover"
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div className="w-full md:w-1/2 text-white mx-4 md:mx-8">
            <h2 className="text-xl text-left md:text-2xl lg:text-3xl font-bold mb-3 md:mb-5">
              UI & UX DESIGN AND DEVELOPMENT SERVICES
            </h2>
            <p className="text-sm md:text-base lg:text-base text-justify mb-5">
              Empowering Businesses with Tailored UI/UX Solutions By Our Design
              Experts
            </p>
            <div className="flex flex-col md:flex-row">
              <a className="btn bg-[#BD981B] w-full md:w-[150px] mr-0 md:mr-4 mb-2 md:mb-0">
                Request a demo
              </a>
              <a className="btn bg-[#fff] text-black w-full md:w-[170px]">
                Request a Quotation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UiUxBanner;
