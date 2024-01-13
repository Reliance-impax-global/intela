import adImg2 from "../../../assets/services/adImg2.png";

const AdFeature1 = () => {
  return (
    <div className="bg-[#011C49] pt-16 mt-10 sm:mt-40">
      <div className="relative bg-[#072966] z-30 mx-4 md:mx-8 lg:mx-20 rounded-2xl">
        <div className="flex flex-col md:flex-row justify-center items-center h-full">
          <div className="w-full md:w-1/2 mx-10 md:mx-10 my-10 pl-8  bg-[#011b4911]">
            <img
              src={adImg2}
              alt="App Development Feature image 1"
              className="w-full h-full object-cover pt-6"
            />
          </div>
          <div className="w-full md:w-1/3 text-white text-left mx-4 md:mx-10 sm:px-5">
            <h2 className="text-xl md:text-2xl lg:text-3xl  mb-3 md:mb-5">
              UX/UI Design
            </h2>
            <p
              className="text-sm md:text-base lg:text-lg pt-8 mb-5"
              style={{ fontFamily: "Roboto" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium id, accusamus, mollitia eligendi consequatur magnam
              ipsam aliquid non dolores ad at voluptatibus dolorum vel,
              asperiores..
            </p>
            <a className="text-[#BD981B] py-5 underline" href="">
              View More
            </a>
            <br />
            <br />
            <a
              className="btn bg-[#BD981B] w-full md:w-[180px] mr-0 md:mr-4 mb-2 md:mb-0 font-inter text-25 font-medium"
              style={{ fontFamily: "Inter", fontWeight: 500 }}
            >
              Discuss a Project with Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdFeature1;
