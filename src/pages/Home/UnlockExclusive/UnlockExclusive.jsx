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
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center h-full w-full bg-[#082D6C] md:px-8 lg:px-16 xl:px-40 rounded-full">
          <div className="flex md:flex-row sm:justify-between md:justify-around items-center border-b md:border-b-0 md:border-r-4 md:h-24 border-[#2f6591] max-w-full md:w-1/2 sm:my-2">
            <div className="max-w-full md:max-w-2/3 h-full md:w-auto sm:mt-7 lg:mb-5">
              <img
                className="w-[100px] md:w-[120px] h-[90px] object-cover sm:mb-5 md:mb-20"
                src={unlockExclusive}
                alt="UnlockExclusive"
              />
            </div>

            <div className="mt-2 md:mt-0 ml-4 md:ml-2 md:mr-5 pr-5">
              <button className="w-[70px] md:w-[100px] md:h-[45px] h-[30px] bg-yellow-500 rounded-lg">
                Services
              </button>
            </div>
          </div>

          <div className="flex md:flex-row justify-between sm:justify-center items-center md:mt-2 w-2/3 md:w-1/2">
            <div className="max-w-full md:max-w-2/3 h-full sm:pb-2 md:pb-5">
              <img
                className="w-[100%] md:w-[262px] sm:h-[50px] md:h-full object-cover sm:pt-2 md:p-5"
                src={unlockLogo}
                alt="unlock-logo"
              />
            </div>

            <div className="mt-4 md:mt-0 ml-4 md:mr-5 sm:mb-6">
              <button className="w-[70px] md:w-[100px] md:h-[45px] h-[30px] bg-yellow-500 rounded-lg">
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
