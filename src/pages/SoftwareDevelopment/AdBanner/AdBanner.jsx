import adbannerImg from "../../../assets/services/app-development-banner.png";
import unlockExclusive from "../../../assets/images/mobile 1.png";

const AdBanner = () => {
  return (
    <div className="bg-[#021D49] pb-40">
      <div className="mx-4 md:mx-8 lg:mx-20 pb-10 mt-10">
        <div className="flex flex-col md:flex-row items-center justify-center mb-10 pt-56">
          <img
            src={unlockExclusive}
            alt=""
            className="mb-4 md:mb-0 md:mr-4 mx-auto md:mx-0 w-[38px] md:w-[120px]"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className=" text-center">
          <h2
            className=" md:text-3xl pb-6"
            style={{ fontFamily: "Roboto", fontWeight: 500 }}
          >
            APP DEVELOPMENT
          </h2>
          <p className="text-center py-3">
            VIRTUAL WORKPLACE AND CUTTING EDGE TECHNOLOGY ALLOW OUR CLIENT TO
            WORK MORE PRODUCTIVELY FROM ANY <br />
            PLACE SECURELY FROM ANY PLATFORM GLOBALLY.
          </p>
        </div>
      </div>
      <div className="relative bg-[#f7efef1a] z-30 mx-4 md:mx-8 lg:mx-20">
        <div className="flex flex-col md:flex-row justify-between items-center h-full">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <div className="p-5">
              <img
                src={adbannerImg}
                alt="App Development Banner image"
                className="w-full h-full object-cover"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-white text-left mx-4 md:mx-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl  mb-3 md:mb-5">
              APP DEVELOPMENT SERVICES
            </h2>
            <p className="text-sm md:text-base lg:text-base text-justify mb-5">
              Get custom software development services tailored to your needs.
              our experienced team of developers will help you create the
              perfect solution for your business
            </p>
            <div className="flex  md:flex-row ">
              <a className="btn bg-[#BD981B] w-1/2 md:w-[150px] mr-0 md:mr-4 mb-2 md:mb-0">
                Request a demo
              </a>
              <a className="btn bg-[#fff] text-black w-1/2 md:w-[170px]">
                Request a Quotation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
