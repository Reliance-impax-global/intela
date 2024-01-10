import wdFeature1 from "../../../assets/web-development/technical-support 1.png";
import wdFeature2 from "../../../assets/web-development/connection 1.png";
import wdFeature3 from "../../../assets/web-development/tap 1.png";
import wdFeature4 from "../../../assets/web-development/study-light-idea 1.png";
import wdFeature5 from "../../../assets/web-development/save-money 1.png";
import wdFeature6 from "../../../assets/web-development/policy 1.png";

const WdFeature = () => {
  return (
    <div className="bg-[#021D4A] py-5">
      <div className="px-4 md:px-8 lg:px-20 mx-auto backdrop:sm:max-w-xl md:max-w-full lg:max-w-screen-xl py-10 lg:py-20 bg-[#082C6B] text-white shadow-2xl rounded-2xl">
        <div className="grid gap-8 row-gap-5 sm:row-gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-bounce">
              <img
                className="w-1/2 hover:animate-ping"
                src={wdFeature1}
                alt="Wd Feature 1"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">FLEXIBLE PLAN</h6>

            <p>
              Our website development services are designed to provide you with
              the flexibility you need to grow your business. Change plans at
              any time without hidden costs.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-pulse">
              <img
                className="w-1/2 hover:animate-ping"
                src={wdFeature2}
                alt="Wd Feature 2"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              ACCESS TO SPECIALIST TEAMS
            </h6>
            <p>
              When you work with us, you will have access to a team of
              specialists who can help you with website development services. We
              are committed to helping your business succeed.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-pulse">
              <img
                className="w-1/2 hover:animate-ping"
                src={wdFeature3}
                alt="Wd Feature 3"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              GAIN HANDS-ON EXPERIENCE
            </h6>
            <p>
              Our team offers the best website development services in the
              industry. Working with us means gaining hands-on experience and
              knowledge to help your business grow.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-bounce">
              <img
                className="w-1/2 hover:animate-ping"
                src={wdFeature4}
                alt="Wd Feature 4"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              INNOVATIVE WORKFORCE SOLUTION
            </h6>
            <p>
              Our team provides website development services for businesses that
              need a user-friendly platform to showcase their products. Get a
              customized solution to fit your brand.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-pulse">
              <img
                className="w-1/2 hover:animate-ping"
                src={wdFeature5}
                alt="Wd Feature 5"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              BACK UP ASSISTANT AT ZERO ADDITIONAL COST
            </h6>
            <p>
              We provide a backup assistant at no additional cost to ensure that
              your website development project runs smoothly. We are committed
              to your success
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-bounce">
              <img
                className="w-1/2 hover:animate-ping"
                src={wdFeature6}
                alt="Wd Feature 6"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              CONTRACT POLICY & NO HIDDEN COST
            </h6>
            <p>
              Our website development services come with a transparent contract
              policy, so you know exactly what you are getting. There are no
              hidden costs or surprises.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WdFeature;
