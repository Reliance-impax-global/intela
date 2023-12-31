import bannerImg from "../../../assets/services/banner-img.png";
import unlockExclusive from "../../../assets/images/mobile 1.png";

const Banner = () => {
  return (
    <>
      <div className="mx-4 md:mx-8 lg:mx-20 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={unlockExclusive}
            alt=""
            className="mb-4 md:mb-0 md:mr-4 mx-auto md:mx-0 w-[20px] md:w-[80px]"
            style={{ maxWidth: "100%" }}
          />

          <div>
            <h1
              className="text-xl font-extrabold text-[#BD981B] md:text-4xl lg:text-5xl"
              style={{ fontFamily: "Abhaya Libre ExtraBold" }}
            >
              CEHPOINT
            </h1>
          </div>
        </div>
        <h2 className="text-left font-bold text-sm md:text-2xl lg:text-3xl mb-5">
          OUR TRUSTED SERVICE PROVIDER FOR COMPREHENSIVE IT SOLUTION
        </h2>
      </div>
      <div className="relative bg-[#f7efef1a] z-30 mx-4 md:mx-8 lg:mx-20">
        <div className="flex flex-col md:flex-row justify-between items-center h-full">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <img
              src={bannerImg}
              alt="hero-image"
              className="w-full h-full object-cover"
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div className="w-full md:w-1/2 text-white mx-4 md:mx-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-5">
              HOW DIGITAL TRANSFORMATION CAN HELP ORGANIZATION TO REACH TO THEIR
              GOAL
            </h2>
            <p className="text-sm md:text-base lg:text-base text-justify mb-5">
              Today the operational efficiency can be measured differently
              through various tools, but more importantly the team skillset and
              experience plays an important role in rectifying the problem.
              Intela solution helps our client to adapt new technology paradigm
              in order to assist them to accelerate to achieve productivity in
              their business.
            </p>
            <div className="flex flex-col md:flex-row">
              <a className="btn bg-[#BD981B] w-full md:w-[150px] mr-0 md:mr-4 mb-2 md:mb-0">
                Request a demo
              </a>
              <a className="btn bg-[#fff] text-black w-full md:w-[170px]">
                Request a Quotation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
