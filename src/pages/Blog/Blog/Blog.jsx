import { Helmet } from "react-helmet-async";
import blogImg1 from "../../../assets/blogs/blogImg1.png";
import blogImg2 from "../../../assets/blogs/blogImg2.png";
import blogImg3 from "../../../assets/blogs/blogImg3.png";
import blogImg4 from "../../../assets/images/network-banner.png";
import blogImg5 from "../../../assets/blogs/blogImg5.png";
import blogImg6 from "../../../assets/blogs/blogImg6.png";
import { useEffect } from "react";
import Aos from "aos";
import BlogBanner from "../BlogBanner/BlogBanner";

const Blog = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Intela ~ Blog</title>
      </Helmet>
      <div className="bg-[#021D4A] py-10">
        <BlogBanner />
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
                  THE LATEST CYBERSECURITY THREATS TO WATCH
                </a>
                <p
                  className="mb-2 text-white"
                  style={{ fontFamily: "Inter", fontWeight: 400 }}
                >
                  Cybersecurity threats can be defined as digital acts performed
                  by individuals with a harmful intent such as stealing data,
                  leaking it, encrypting it or making computing systems...
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
                  DIGITAL SAFETY NETS: EXPLORING THE IMPACT OF CYBERSECURITY ON
                  UX DESIGN
                </a>
                <p
                  className="mb-2 text-white"
                  style={{ fontFamily: "Inter", fontWeight: 400 }}
                >
                  User experience (UX) has become a crucial aspect of every
                  digital product or service. A UX designer always aims to
                  create user-friendly and enjoyable experiences for
                  end-users....
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
                  CYBERSECURITY FOR SELF- STORAGE BUSINESSES
                </a>
                <p
                  className="mb-2 text-white"
                  style={{ fontFamily: "Inter", fontWeight: 400 }}
                >
                  In the era of digital transformation, the security of storage
                  units transcends beyond physical locks and surveillance
                  cameras. The integration of technology into storage...
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
                  WHAT CAN YOU DO WITH AN ONLINE GRADUATE CERTIFICATE IN
                  CYBERSECURITY?
                </a>
                <p
                  className="mb-2 text-white"
                  style={{ fontFamily: "Inter", fontWeight: 400 }}
                >
                  An online graduate certificate in cybersecurity is a versatile
                  qualification that opens up a realm of exciting career
                  opportunities. This credential is unique; it is more than
                  just...
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
                  CYBERSECURITY BASICS FOR CRYPTOCURRENCY INVESTORS
                </a>
                <p
                  className="mb-2 text-white"
                  style={{ fontFamily: "Inter", fontWeight: 400 }}
                >
                  The truth about cryptocurrency trading is that it isn’t the
                  get-rich-quick route that many inexperienced people hope and
                  believe it to be. While some people do indeed end up...
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
                  CRYPTOCURRENCY SECURITY:HOW TO CHOOSE THE SAFEST EXCHANGE FOR
                  TRADING
                </a>
                <p
                  className="mb-2 text-white"
                  style={{ fontFamily: "Inter", fontWeight: 400 }}
                >
                  Despite the risks associated with crypto trading, many people
                  continue to maintain a high level of interest in
                  cryptocurrencies. High returns can be considered as one of
                  the...
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

export default Blog;
