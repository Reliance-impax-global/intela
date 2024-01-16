import { Helmet } from "react-helmet-async";
import blogImg1 from "../../../assets/solution/articles-img1.png";
import blogImg2 from "../../../assets/solution/articles-img2.png";
import blogImg3 from "../../../assets/solution/articles-img3.png";
import blogImg4 from "../../../assets/solution/articles-img4.png";
import blogImg5 from "../../../assets/blogs/blogImg5.png";
import blogImg6 from "../../../assets/blogs/blogImg6.png";
import logoDeltapath from "../../../assets/images/unlock-logo.png";
import { useEffect } from "react";
import Aos from "aos";

const BlogDeltapath = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Intela ~ Blog For Deltapath</title>
      </Helmet>
      <div className="bg-[#021D4A] py-10">
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

          <img className="mx-auto" src={logoDeltapath} alt="Logo Deltapath" />
        </div>
        <div className="px-5 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-28 lg:px-0 pt-10 md:py-28 text-white rounded-2xl shadow-2xl">
          <div className="grid gap-20 md:grid-cols-2 sm:max-w-sm sm:mx-auto md:max-w-full">
            <div
              className="overflow-hidden transition-shadow duration-300 p-5 bg-[#082C6B] rounded shadow-sm"
              data-aos="flip-left"
              data-aos-duration="3000"
            >
              <img
                src={blogImg1}
                className="object-fill w-full h-64"
                alt="Blog Image 1"
              />
              <div className="p-5 border-t-0">
                <a
                  href="/"
                  aria-label="Category"
                  title="Visit the East"
                  className="inline-block mb-3 transition-colors duration-200 hover:text-deep-purple-accent-700"
                  style={{
                    fontFamily: "Antic",
                    fontWeight: 400,
                    fontSize: "24px",
                  }}
                >
                  HELPING AVAYA CUSTOMERS TO STRATEGIZE THE FURE
                </a>
                <p
                  className="mb-2 text-white"
                  style={{ fontFamily: "Inter", fontWeight: 400 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium id, accusamus, mollitia eligendi consequatur
                  magnam ipsam aliquid non dolores ad at voluptatibus dolorum
                  vel, asperiores..
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-[#BD981B] hover:text-deep-purple-800"
                >
                  Read more &gt;
                </a>
              </div>
            </div>
            <div
              className="overflow-hidden transition-shadow duration-300 p-5 bg-[#082C6B] rounded shadow-sm"
              data-aos="flip-left"
              data-aos-duration="3000"
            >
              <img
                src={blogImg2}
                className="object-fill w-full h-64"
                alt="Blog Image 2"
              />
              <div className="p-5 border-t-0">
                <a
                  href="/"
                  aria-label="Category"
                  title="Simple is better"
                  className="inline-block mb-3 transition-colors duration-200 hover:text-deep-purple-accent-700"
                  style={{
                    fontFamily: "Antic",
                    fontWeight: 400,
                    fontSize: "24px",
                  }}
                >
                  END- OF-LIFE OF CISCO UNIFIED COMMUNICATION
                </a>
                <p
                  className="mb-2 text-white"
                  style={{ fontFamily: "Inter", fontWeight: 400 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium id, accusamus, mollitia eligendi consequatur
                  magnam ipsam aliquid non dolores ad at voluptatibus dolorum
                  vel, asperiores..
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-[#BD981B] hover:text-deep-purple-800"
                >
                  Read more &gt;
                </a>
              </div>
            </div>
            <div
              className="overflow-hidden transition-shadow duration-300 p-5 bg-[#082C6B] rounded shadow-sm"
              data-aos="flip-left"
              data-aos-duration="3000"
            >
              <img
                src={blogImg3}
                className="object-fill w-full h-64"
                alt="Blog Image 3"
              />
              <div className="p-5 border-t-0">
                <a
                  href="/"
                  aria-label="Category"
                  title="Visit the East"
                  className="inline-block mb-3 transition-colors duration-200 hover:text-deep-purple-accent-700"
                  style={{
                    fontFamily: "Antic",
                    fontWeight: 400,
                    fontSize: "24px",
                  }}
                >
                  BUSINESS TEXTING SMS TO DRIVE B2B AND B2C
                </a>
                <p
                  className="mb-2 text-white"
                  style={{ fontFamily: "Inter", fontWeight: 400 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium id, accusamus, mollitia eligendi consequatur
                  magnam ipsam aliquid non dolores ad at voluptatibus dolorum
                  vel, asperiores..
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-[#BD981B] hover:text-deep-purple-800"
                >
                  Read more &gt;
                </a>
              </div>
            </div>
            <div
              className="overflow-hidden transition-shadow duration-300 p-5 bg-[#082C6B] rounded shadow-sm"
              data-aos="flip-left"
              data-aos-duration="3000"
            >
              <img
                src={blogImg4}
                className="object-fill w-full h-64"
                alt="Blog Image 4"
              />
              <div className="p-5 border-t-0">
                <a
                  href="/"
                  aria-label="Category"
                  title="Visit the East"
                  className="inline-block mb-3 transition-colors duration-200 hover:text-deep-purple-accent-700"
                  style={{
                    fontFamily: "Antic",
                    fontWeight: 400,
                    fontSize: "24px",
                  }}
                >
                  DELTAPATH FOR SALESFORCE
                </a>
                <p
                  className="mb-2 text-white"
                  style={{ fontFamily: "Inter", fontWeight: 400 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium id, accusamus, mollitia eligendi consequatur
                  magnam ipsam aliquid non dolores ad at voluptatibus dolorum
                  vel, asperiores..
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-[#BD981B] hover:text-deep-purple-800"
                >
                  Read more &gt;
                </a>
              </div>
            </div>
            <div
              className="overflow-hidden transition-shadow duration-300 p-5 bg-[#082C6B] rounded shadow-sm"
              data-aos="flip-left"
              data-aos-duration="3000"
            >
              <img
                src={blogImg5}
                className="object-fill w-full h-64"
                alt="Blog Image 5"
              />
              <div className="p-5 border-t-0">
                <a
                  href="/"
                  aria-label="Category"
                  title="Visit the East"
                  className="inline-block mb-3 transition-colors duration-200 hover:text-deep-purple-accent-700"
                  style={{
                    fontFamily: "Antic",
                    fontWeight: 400,
                    fontSize: "24px",
                  }}
                >
                  SERVICE OFFICE SOLUTION
                </a>
                <p
                  className="mb-2 text-white"
                  style={{ fontFamily: "Inter", fontWeight: 400 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium id, accusamus, mollitia eligendi consequatur
                  magnam ipsam aliquid non dolores ad at voluptatibus dolorum
                  vel, asperiores..
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-[#BD981B] hover:text-deep-purple-800"
                >
                  Read more &gt;
                </a>
              </div>
            </div>
            <div
              className="overflow-hidden transition-shadow duration-300 p-5 bg-[#082C6B] rounded shadow-sm"
              data-aos="flip-left"
              data-aos-duration="3000"
            >
              <img
                src={blogImg6}
                className="object-fill w-full h-64"
                alt="Blog Image 6"
              />
              <div className="p-5 border-t-0">
                <a
                  href="/"
                  aria-label="Category"
                  title="Visit the East"
                  className="inline-block mb-3 transition-colors duration-200 hover:text-deep-purple-accent-700"
                  style={{
                    fontFamily: "Antic",
                    fontWeight: 400,
                    fontSize: "24px",
                  }}
                >
                  SMALL TO MIDSIZE BUSINESS
                </a>
                <p
                  className="mb-2 text-white"
                  style={{ fontFamily: "Inter", fontWeight: 400 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium id, accusamus, mollitia eligendi consequatur
                  magnam ipsam aliquid non dolores ad at voluptatibus dolorum
                  vel, asperiores..
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-[#BD981B] hover:text-deep-purple-800"
                >
                  Read more &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDeltapath;
