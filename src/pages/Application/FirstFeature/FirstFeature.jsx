import feature1 from "../../../assets/application/target-center 1.png";
import feature2 from "../../../assets/application/ui-design 1.png";
import feature3 from "../../../assets/application/mobile-development 1.png";

const FirstFeature = () => {
  return (
    <div className="bg-[#07121C] py-5">
      <div className="px-4 md:px-8 lg:px-20 mx-auto backdrop:sm:max-w-xl md:max-w-full lg:max-w-screen-xl py-10 lg:py-20 bg-[#091424] text-white shadow-2xl rounded-2xl">
        <div className="grid gap-8 row-gap-5 sm:row-gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-bounce">
              <img
                className="w-1/2 hover:animate-ping"
                src={feature1}
                alt="feature1"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              FRONT END / BACK END APPLICATION
            </h6>

            <p>
              Front End & Backend operational efficiency is very important for
              mostly organization to ensure their application works and response
              in a timely manner. We have our design team who is expert in both
              UX/UI and other front end development to help our clients.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-pulse">
              <img
                className="w-1/2 hover:animate-ping"
                src={feature2}
                alt="Feature2"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              ANDROID / IOS APPLICATION
            </h6>
            <p>
              We aim to provide our client with a complete business value to
              enable them to achieve their productivity, to assist our clients
              in completing their objective during their journey to their
              digital transformation as well as any other plan to meet to their
              goal in future.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-pulse">
              <img
                className="w-1/2 hover:animate-ping"
                src={feature3}
                alt="Feature31"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              API / IOS INTEGRATION
            </h6>
            <p>
              We intend to provide our customers with the best user experience
              from beginning to end, with a smart, innovative , resilient
              solution which can allow them to reach to their goal, with more
              secured and fast, quality of delivery.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstFeature;
