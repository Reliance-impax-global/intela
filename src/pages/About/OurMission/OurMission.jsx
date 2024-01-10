import WhoWeAre from "../../../assets/about/who-we-are.png";
import mission from "../../../assets/about/mission.png";
import vission from "../../../assets/about/vission.png";

const OurMission = () => {
  return (
    <div className="bg-[#021E4C] py-5">
      <div className="px-4 md:px-8 lg:px-20 mx-auto backdrop:sm:max-w-xl md:max-w-full lg:max-w-screen-xl py-10 lg:py-20 bg-[#082C6B] text-white shadow-2xl rounded-2xl">
        <div className="grid gap-8 row-gap-5 sm:row-gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-bounce">
              <img
                className="w-1/2 hover:animate-ping"
                src={WhoWeAre}
                alt="service1"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">WHO WE ARE</h6>

            <p>
              We are known to be a company who provides a complete range of
              business solution to our client. We can support our client with
              various kind of products where IT solution and consultancy is our
              key area , additionally we can service you with IT outsourcing and
              project management also depending on your requirement. Our
              solution includes IT infrastructure managements solution , Unified
              Communication solution , Application development and any other
              digital content creation.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-pulse">
              <img
                className="w-1/2 hover:animate-ping"
                src={mission}
                alt="service1"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">OUR MISSION</h6>
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
                src={vission}
                alt="service1"
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">OUR VISION</h6>
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

export default OurMission;
