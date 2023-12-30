import unlockExclusive from "../../../assets/images/mobile 1.png";
import unlockLogo from "../../../assets/images/unlock-logo.png";

const UnlockExclusive = () => {
  return (
    <div className="bg-[#091424] py-10 md:py-20 text-white px-4 md:px-20">
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
      <div className="bg-white">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center h-[150px] w-full md:w-auto m-auto bg-[#132541] rounded-full">
          <div className="flex md:justify-between items-center border-b md:border-b-0 md:border-r border-[#2f6591] md:w-1/2">
            <div className="w-1/2 md:w-auto">
              <img
                className="w-1/2 md:w-full h-full object-cover"
                src={unlockExclusive}
                alt="UnlockExclusive"
              />
            </div>
            <div className="mt-4 md:mt-0 ml-4 md:ml-0">
              <button className="w-[80px] md:w-[180px] bg-yellow-500 rounded-lg">
                Services
              </button>
            </div>
          </div>
          <div className="flex md:justify-between items-center mt-4 md:mt-0 md:w-1/2">
            <div className="w-1/2 md:w-auto">
              <img
                className="w-1/2 md:w-full h-full object-cover"
                src={unlockLogo}
                alt="unlock-logo"
              />
            </div>
            <div className="mt-4 md:mt-0 ml-4 md:ml-0">
              <button className="w-[80px] md:w-[180px] bg-yellow-500 rounded-lg">
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
