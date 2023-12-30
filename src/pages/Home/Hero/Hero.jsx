import hero from "../../../assets/images/hero-image.png";

const Hero = () => {
  return (
    <div className="relative bg-[#f7efef1a] z-30 mx-4 md:mx-8 lg:mx-20">
      <div className="flex flex-col md:flex-row justify-between items-center h-full">
        <div className="w-full md:w-1/2 mx-4 md:mx-0">
          <img
            src={hero}
            alt="hero-image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 text-white mx-4 md:mx-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-5">
            OUR SOLUTION CAN HELP CLIENTS WORK PRODUCTIVELY
          </h2>
          <p className="text-sm md:text-base lg:text-lg">
            VIRTUAL WORKPLACE AND CUTTING-EDGE TECHNOLOGY ALLOW OUR CLIENTS TO
            WORK MORE PRODUCTIVELY FROM ANY PLACE SECURELY AND ON ANY PLATFORM
            GLOBALLY.
          </p>
        </div>
      </div>
      <div className="text-white text-center mt-4 md:mt-8 mx-4 md:mx-8 bg-[#D9D9D940] opacity-70 z-20 relative h-[80px] md:h-[100px] flex items-center">
        <p className="text-[#BD981B] text-xs md:text-sm lg:text-base">
          WE PARTNER TOGETHER WITH DELTAPATH AND PEXIP TO EXTEND OUR VALUE AND
          BRING IN A UNIQUE QUALITY OF EXPERIENCE ACROSS UNIFIED COMMUNICATION
          PLATFORMS.
        </p>
      </div>
    </div>
  );
};

export default Hero;
