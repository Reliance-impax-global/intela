import secondFeature1 from "../../../assets/application/monitor 1.png";
import secondFeature2 from "../../../assets/application/web-design 1.png";
import secondFeature3 from "../../../assets/application/high-five 1.png";
import secondFeature4 from "../../../assets/application/settings 1.png";
import secondFeature5 from "../../../assets/application/graphic-design 1.png";
import secondFeature6 from "../../../assets/application/arrow 1.png";

const SecondFeature = () => {
  return (
    <div className="bg-[#07121C] py-5">
      <div className="px-4 md:px-8 lg:px-20 mx-auto backdrop:sm:max-w-xl md:max-w-full lg:max-w-screen-xl py-10 lg:py-20 bg-[#091424] text-white shadow-2xl rounded-2xl">
        <div className="grid gap-8 row-gap-5 sm:row-gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-bounce">
              <img
                className="w-1/2 hover:animate-ping"
                src={secondFeature1}
                alt="service1"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              INTEROPERABLE PLATFORM
            </h6>

            <p>
              The application can be interoperate easily with any other platform
              through open approach design.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-pulse">
              <img
                className="w-1/2 hover:animate-ping"
                src={secondFeature2}
                alt="service1"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">UNIQUE DESIGN</h6>
            <p>
              Design can be made as per client’s specific requirement, based on
              their use cases and work flow.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-pulse">
              <img
                className="w-1/2 hover:animate-ping"
                src={secondFeature3}
                alt="Second Feature3"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">USER FRIENDLY</h6>
            <p>
              We provide a user friendly interface where the application
              features control can be more effective and provide the user with
              real life experience.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-bounce">
              <img
                className="w-1/2 hover:animate-ping"
                src={secondFeature4}
                alt="Second Feature3"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">EASY SETTINGS</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-pulse">
              <img
                className="w-1/2 hover:animate-ping"
                src={secondFeature5}
                alt="Second Feature5"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">FLAT DESIGN</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-bounce">
              <img
                className="w-1/2 hover:animate-ping"
                src={secondFeature6}
                alt="Second Feature6"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">EASY DOWNLOAD</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondFeature;
