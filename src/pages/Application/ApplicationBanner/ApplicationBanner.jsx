import applicationBanner from "../../../assets/application/application-banner.png";

const ApplicationBanner = () => {
  return (
    <div className="relative bg-[#f7efef1a] z-30 mx-4 md:mx-8 lg:mx-20">
      <div className="flex flex-col md:flex-row justify-between items-center h-full">
        <div className="w-full md:w-1/2 mx-4 md:mx-0">
          <img
            src={applicationBanner}
            alt="banner-image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 text-white text-left mx-4 md:mx-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-5">
            DEVELOPMENT TEAM
          </h2>
          <p className="text-sm md:text-base lg:text-lg">
            You can use UX/UI and other application service for your easier
            application to be used
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationBanner;
