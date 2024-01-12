import unlockExclusive from "../../../assets/images/mobile 1.png";
import unlockLogo from "../../../assets/images/unlock-logo.png";

const UnlockExclusive = () => {
  return (
    <div className="bg-[#021D49] py-10 md:py-20 text-white px-4 md:px-20">
      <div className="mb-10 md:mb-20">
        <h2 className="text-2xl md:text-3xl font-bold">
          UNLOCK EXCLUSIVE DEALS WITH OUR TRUSTED PARTNERS
        </h2>
        <h3 className="text-xl">OUR PARTNERS</h3>
        <p className="text-sm md:text-base">
          CEHPOINT is a leading provider of IT solutions, serving both national
          and international clients with a comprehensive range of services. The
          services encompass a wide range of solutions tailored to meet the
          unique needs and challenges faced by its clients. These offerings
          encompass training, cybersecurity, and various IT services...
        </p>
      </div>
      <div className="rounded-full">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center h-[190px] w-full  m-auto bg-[#082D6C] px-40 rounded-full">
          <div className="flex sm:justify-between md:justify-around  items-center border-b md:border-b-0 md:border-r-4 md:h-24 border-[#2f6591] w-full md:w-1/2 sm:my-2">
            <div className="w-1/3 h-full md:w-auto sm:mt-7">
              <img
                className="w-full md:w-[120px] h-[90px] object-cover md:mb-20"
                src={unlockExclusive}
                alt="UnlockExclusive"
              />
            </div>
            <div className="mt-4 md:mt-0 ml-4 md:ml-2 md:mr-5 pr-5">
              <button className="w-[60px] md:w-[100px] h-[50px] bg-yellow-500 rounded-lg">
                Services
              </button>
            </div>
          </div>

          <div className="flex md:justify-between sm:justify-center items-center md:mt-0 w-full md:w-1/2  ">
            <div className="w-2/3 md:w-2/3 h-full  sm:pb-5">
              <img
                className="w-[200px] md:w-[262px]  sm:h-[40px] md:h-full object-cover sm:mt-2  md:p-10"
                src={unlockLogo}
                alt="unlock-logo"
              />
            </div>
            <div className="mt-4 md:mt-0 ml-4  md:mr-5 sm:mb-6">
              <button className="w-[60px] md:w-[100px] h-[50px] bg-yellow-500 rounded-lg">
                Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockExclusive;
