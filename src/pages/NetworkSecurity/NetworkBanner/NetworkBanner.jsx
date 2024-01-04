import networkBanner from "../../../assets/images/network-banner.png";

const NetworkBanner = () => {
  return (
    <div className="relative bg-[#f7efef1a] z-30 mx-4 md:mx-8 lg:mx-20">
      <div className="flex flex-col md:flex-row justify-between items-center h-full">
        <div className="w-full md:w-1/2 mx-4 md:mx-0">
          <img
            src={networkBanner}
            alt="banner-image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 text-white text-left mx-4 md:mx-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-5">
            How To Monitor Your Application Services Across Your Platform
          </h2>
          <p className="text-sm md:text-base lg:text-lg mb-5">
            Protect your network from vulnerable sources, measure performance of
            your application to monitor against the increasing sophistication of
            hacker threats
          </p>
          <a className="btn bg-[#BD981B] w-full md:w-[150px] mr-0 md:mr-4 mb-2 md:mb-0 font-inter text-25 font-medium">
            Request a demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default NetworkBanner;
