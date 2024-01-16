import background from "../../../assets/blogs/banner-bg.png";
const BlogBanner = () => {
  return (
    <div className="px-5 md:px-10 lg:px-20 pb-16 pt-10">
      <div
        className="border-2 border-gray-800"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className=" max-w-full mx-auto my-10 ">
          <h2
            className="text-center text-[30px] md:text-[55px] lg:text-[64px]"
            style={{
              fontFamily: "FONTSPRING DEMO",
              fontWeight: 900,
              color: "rgba(255, 255, 255, 1)",
            }}
          >
            GO THROUGH OUR BLOG
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
