import img4 from "../../../assets/web-development/image4.png";

const WdFeature3 = () => {
  return (
    <div className="bg-[#011C49] pt-10">
      <div className="relative bg-[#072966] z-30 mx-4 md:mx-8 lg:mx-20 rounded-2xl">
        <div className="flex flex-col md:flex-row justify-between items-center h-full">
          <div className="w-full md:w-1/3 text-white text-left mx-4 md:mx-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl  mb-3 md:mb-5">
              WordPress <br /> Website
            </h2>
            <p
              className="text-sm md:text-base lg:text-lg mb-5"
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
              className="btn bg-[#BD981B] hover:bg-blue-950 hover:text-white w-full md:w-[195px] mr-0 md:mr-4 mb-2 md:mb-0 font-inter text-25 font-medium"
              href="#"
            >
              Discuss a Project with Us
            </a>
          </div>
          <div className="w-full md:w-1/2 mx-10 md:mx-10 my-10">
            <div className="pl-5  bg-[#011C49]">
              <img
                src={img4}
                alt="banner-image"
                className="w-full h-full object-cover pt-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WdFeature3;
