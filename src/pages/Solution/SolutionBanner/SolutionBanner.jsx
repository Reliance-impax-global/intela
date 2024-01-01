import Banner from "../../../assets/solution/solution-banner.png";

const SolutionBanner = () => {
  return (
    <div className="relative bg-[#f7efef1a] z-30 mx-4 md:mx-8 lg:mx-20">
      <div className="flex flex-col md:flex-row justify-between items-center h-full">
        <div className="w-full md:w-1/2 mx-4 md:mx-0">
          <img
            src={Banner}
            alt="hero-image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 text-white text-left mx-4 md:mx-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-5">
            DELTAPATH ENGAGE
          </h2>
          <p className="text-sm md:text-base lg:text-lg">
            Transform Your Business Communications with our solution for
            Telephony & Unified communication platform, available both
            on-premise & cloud based model subscription.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionBanner;
