import SdbannerImg from "../../../assets/services/software-development-banner.png";
import unlockExclusive from "../../../assets/images/mobile 1.png";

const PartnerBanner = () => {
  return (
    <>
      <div className="mx-4 md:mx-8 lg:mx-20 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center justify-center mb-10">
          <img
            src={unlockExclusive}
            alt=""
            className="mb-4 md:mb-0 md:mr-4 mx-auto md:mx-0 w-[20px] md:w-[100px]"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <h2
          className="text-left text-sm md:text-2xl lg:text-3xl mb-10 pl-5"
          style={{ fontFamily: "Antic", fontWeight: 400 }}
        >
          OUR TRUSTED SERVICE PROVIDER FOR COMPREHENSIVE IT SOLUTION
        </h2>
      </div>
      <div className="relative bg-[#f7efef1a] z-30 mx-4 md:mx-8 lg:mx-20">
        <div className="flex flex-col md:flex-row justify-between items-center h-full">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <img
              src={SdbannerImg}
              alt="hero-image"
              className="w-full h-full object-cover"
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div className="w-full md:w-1/2 text-white mx-4 md:mx-8">
            <h2
              className="text-xl text-left md:text-2xl lg:text-3xl mb-3 md:mb-5"
              style={{ fontFamily: "Antic", fontWeight: 400 }}
            >
              Do you have any projects in mind?
            </h2>
            <p
              className="text-sm md:text-base lg:text-base text-justify mb-5"
              style={{ fontFamily: "Roboto", fontWeight: 400 }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad sunt,
              ipsa quaerat tenetur sequi perferendis quos totam facere minima
            </p>
            <div className="flex flex-col md:flex-row">
              <a
                className="btn bg-[#BD981B] w-full md:w-[150px] mr-0 md:mr-4 mb-2 md:mb-0"
                style={{ fontFamily: "Inter", fontWeight: 500 }}
              >
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

export default PartnerBanner;