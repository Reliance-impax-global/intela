import { Helmet } from "react-helmet-async";
import blogImg1 from "../../../assets/blogs/blogImg1.png";
import blogImg2 from "../../../assets/blogs/blogImg2.png";
import blogImg3 from "../../../assets/blogs/blogImg3.png";
import blogImg4 from "../../../assets/blogs/blogImg4.png";
import blogImg5 from "../../../assets/blogs/blogImg5.png";
import blogImg6 from "../../../assets/blogs/blogImg6.png";
import { useEffect } from "react";
import Aos from "aos";

const Blog = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Intela ~ Blog</title>
      </Helmet>
      <div className="bg-[#06111B] py-10">
        <div className="px-5 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-24 pt-10 md:py-28 bg-[#091424] text-white rounded-2xl shadow-2xl">
          <div className="grid gap-20 md:grid-cols-2 sm:max-w-sm sm:mx-auto md:max-w-full">
            <div
              className="overflow-hidden transition-shadow duration-300 bg-[#091424] rounded shadow-sm"
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
                  className="inline-block mb-3 text-2xl font-bold transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  HOW WEBRTC CAN BE BENEFITED TO ORGANISATION
                </a>
                <p className="mb-2 text-white">
                  Throughout the course of recent years, WebRTC innovation has
                  acquired a great deal of prominence. WebRTC or Web Real-Time
                  Communication is an open-source venture and
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
              className="overflow-hidden transition-shadow duration-300 bg-[#091424] rounded shadow-sm"
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
                  className="inline-block mb-3 text-2xl font-bold  transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  HOW DELTAPATH APPLICATION CAN HELP S ALESFORCE USER TO RECEIVE
                  THE CALL
                </a>
                <p className="mb-2 text-white">
                  Sed ut perspiciatis unde omnis iste natus error sit sed quia
                  consequuntur magni voluptatem doloremque.
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
              className="overflow-hidden transition-shadow duration-300 bg-[#091424] rounded shadow-sm"
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
                  title="Film It!"
                  className="inline-block mb-5 text-2xl font-bold  transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  8 BEASY SEO TIPS FOR WRITING ARTICLES ONLINE
                </a>

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
              className="overflow-hidden transition-shadow duration-300 bg-[#091424] rounded shadow-sm"
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
                  title="Film It!"
                  className="inline-block mb-5 text-2xl font-bold  transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  TOP 10 MARKETING ARTICLES OF 2021
                </a>

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
              className="overflow-hidden transition-shadow duration-300 bg-[#091424] rounded shadow-sm"
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
                  title="Film It!"
                  className="inline-block mb-5 text-2xl font-bold transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  WHEN AND WHY YOU SHOULD SWITH TO A CLOUD CONTACT CENTRE
                  SOLUTION (WHAT TO AVOID0)
                </a>

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
              className="overflow-hidden transition-shadow duration-300 bg-[#091424] rounded shadow-sm"
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
                  title="Film It!"
                  className="inline-block mb-5 text-2xl font-bold transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  8 BENEFITS OF ADOPTING CLOUD TELEPHONY BEYOND ENABLING REMOTE
                  WORK
                </a>

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

export default Blog;
