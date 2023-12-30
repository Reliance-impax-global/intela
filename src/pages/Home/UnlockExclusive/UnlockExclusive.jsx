import unlockExclusive from "../../../assets/images/mobile 1.png";
import unlockLogo from "../../../assets/images/unlock-logo.png";

const UnlockExclusive = () => {
  return (
    <div className="bg-[#091424] py-20 text-white px-20">
      <div className="mb-20">
        <h2 className="text-xl font-bold">
          UNLOCK EXCLUSIVE DEALS WITH OUR TRUSTED PARTNERS
        </h2>
        <h3>OUR PARTNERS</h3>
        <p>
          CEHPOINT is a leading provider of IT solutions, serving both national
          and international clients with a comprehensive range of services. The
          services encompass a wide range of solutions tailored to meet the
          unique needs and challenges faced by its clients.These offerings
          encompass training, cybersecurity, and various IT services......{" "}
        </p>
      </div>
      <div className="bg-white">
        <div className="flex justify-around items-center h-[100px] w-full m-auto bg-[#132541] rounded-full">
          <div className="flex justify-between items-center border-r border-[#2f6591]">
            <div>
              <img
                className="w-1/2"
                src={unlockExclusive}
                alt="UnlockExclusive"
              />
            </div>
            <div>
              <button className="w-[121px] bg-yellow-500 mr-40 rounded-lg">
                Services
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <img className="w-1/2" src={unlockLogo} alt="unlock-logo" />
            </div>
            <div>
              <button className="w-[121px] bg-yellow-500 mr-40 rounded-lg">
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
