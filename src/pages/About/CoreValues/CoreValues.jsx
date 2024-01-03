import coreValues1 from "../../../assets/about/core-values1.png";
import coreValues2 from "../../../assets/about/core-values2.png";
import coreValues3 from "../../../assets/about/core-values3.png";
import coreValues4 from "../../../assets/about/core-values4.png";

const CoreValues = () => {
  return (
    <div className="bg-[#07121C] text-white py-5">
      <h1 className="text-lg md:text-xl lg:text-2xl font-bold pb-10 text-justify py-10 px-4 ml-7 md:px-8 lg:px-20 rounded-md shadow-2xl pt-8">
        OUR CORE VALUES THAT MAKE US PROFESSIONAL
      </h1>

      <div className="px-4 md:px-8 lg:px-20 md:mx-28 backdrop:sm:max-w-xl md:max-w-full lg:max-w-screen-xl py-10 lg:py-20 bg-[#091424] text-white shadow-2xl rounded-2xl">
        <div className="grid gap-8 row-gap-5 sm:row-gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-bounce">
              <img
                className="w-1/2 hover:animate-ping"
                src={coreValues1}
                alt="service1"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              INDUSTRY EXPERIENCE
            </h6>

            <p>
              We have a very strong industry experience , working with with many
              clients worldwide to help them design their solution. Our industry
              experience brings us a unique value to understand our clients
              particularly.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-pulse">
              <img
                className="w-1/2 hover:animate-ping"
                src={coreValues2}
                alt="service1"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">FASTER RESPONSE</h6>
            <p>
              We react immediately to our clients’ response to make sure that
              their business des not find any impact due to any delayed caused
              by our team support and services.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-pulse">
              <img
                className="w-1/2 hover:animate-ping"
                src={coreValues3}
                alt="service1"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">UNIQUE SOLUTION</h6>
            <p>
              Solution allow you to connect to WebRTC using a simple dialing
              through Deltapath mobile application or Engage Desktop client, to
              connect to conference room where H.323/ SIP call can be connected
              immediately.We strive the best to come up with unique solution
              proposal and positioning of our product and services through
              various approached and design methodology. Our clients understand
              that how this brings us different while comparing with another
              competitor in the market.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-bounce">
              <img
                className="w-1/2 hover:animate-ping"
                src={coreValues4}
                alt="service1"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">MARKET RECOGNITION</h6>
            <p>
              People believe in our services and our strong presence makes them
              feel confident and more secured every time they work with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
