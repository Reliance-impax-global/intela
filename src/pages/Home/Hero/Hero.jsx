import hero from "../../../assets/images/hero-image.png";

const Hero = () => {
  return (
    <div className="relative bg-[#f7efef1a] mx-20">
      <div className="flex justify-between items-center h-full z-30 relative">
        <div className="w-1/2 mx-20">
          <img
            src={hero}
            alt="hero-image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 text-white mx-20">
          <h2 className="text-2xl font-bold mb-5">
            OUR SOLUTION CAN HELP CLIENTS WORK PRODUCTIVELY
          </h2>
          <p>
            VIRTUAL WORKPLACE AND CUTTING-EDGE TECHNOLOGY ALLOW OUR CLIENTS TO
            WORK MORE PRODUCTIVELY FROM ANY PLACE SECURELY AND ON ANY PLATFORM
            GLOBALLY.
          </p>
        </div>
      </div>
      <div className="text-white text-center mt-8 mx-20 bg-[#D9D9D940] opacity-70 z-30 relative h-[100px] flex items-center">
        <p className="text-[#BD981B]">
          WE PARTNER TOGETHER WITH DELTAPATH AND PEXIP TO EXTEND OUR VALUE AND
          BRING IN A UNIQUE QUALITY OF EXPERIENCE ACROSS UNIFIED COMMUNICATION
          PLATFORMS.
        </p>
      </div>
    </div>
  );
};

export default Hero;
