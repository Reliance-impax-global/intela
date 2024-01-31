import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import solution1 from "../../../assets/images/it-solution-1.png";
import solution2 from "../../../assets/images/it-solution-2.png";
import solution3 from "../../../assets/images/it-solution-3.png";
import solution4 from "../../../assets/images/it-solution-4.png";
import partner1 from "../../../assets/images/partner1.png";
import partner2 from "../../../assets/images/partner2.png";
import partner3 from "../../../assets/images/partner3.png";
import partner4 from "../../../assets/images/partner4.png";
import partner5 from "../../../assets/images/partner5.png";
const Deltapath = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-[#021D49] py-8 sm:py-12 md:py-16 lg:py-20 text-white px-4 sm:px-8 md:px-16 lg:px-20">
      <p className="pb-6 sm:pb-8 md:pb-10 lg:pb-12">
        Deltapath Mobile application & Deltapath Engage can be downloaded easily
        by clicking the icon – once your application is downloaded then you can
        reach our sales team to provide you the username & password for further
        testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-11">
        <div
          className="card w-full bg-[#082D6C] text-neutral-content py-20"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <div className="card-body items-center text-center">
            <h2 className="card-title mb-2">Deltapath Engage</h2>
            <p className="mb-2">Mac App store</p>
            <div className="card-actions justify-center">
              <a
                className="btn w-[100px] md:w-[130px] h-[45px] bg-yellow-500 hover:bg-blue-950 hover:text-white mr-40 rounded-lg ml-32"
                href="https://apps.apple.com/us/app/deltapath-engage/id1529241873?mt=12"
              >
                Download
              </a>
            </div>
          </div>
        </div>
        <div
          className="card w-full bg-[#082D6C] text-neutral-content py-20"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <div className="card-body items-center text-center">
            <h2 className="card-title mb-2">Deltapath Engage</h2>
            <p className="mb-2">Apple Store</p>
            <div className="card-actions justify-center">
              <a
                className="btn w-[100px] md:w-[130px] h-[45px] bg-yellow-500 hover:bg-blue-950 hover:text-white mr-40 rounded-lg ml-32"
                href="https://apps.apple.com/us/app/deltapath-engage/id1529241873?mt=12"
              >
                Download
              </a>
            </div>
          </div>
        </div>
        <div
          className="card w-full bg-[#082D6C] text-neutral-content py-20"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <div className="card-body items-center text-center">
            <h2 className="card-title mb-2">Deltapath Engage</h2>
            <p className="mb-2">Play Store</p>
            <div className=" card-actions justify-center">
              <a
                className="btn w-[100px] md:w-[130px] h-[45px] bg-yellow-500 hover:bg-blue-950 hover:text-white mr-40 rounded-lg ml-32"
                href="https://play.google.com/store/apps/details?id=com.deltapath.frsipMobile"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-14">
        <h2 className="text-center text-3xl">Our Recently Posted Blog</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ml-4 sm:ml-8 md:ml-16 lg:ml-20 my-6 sm:my-8 md:my-10 lg:my-12 bg-[#205ed14d] shadow-2xl border-8 border-solid border-[#082D6C] rounded-2xl">
        <div
          className="card w-full shadow-2xl border-8 border-solid border-[#082D6C]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure className="px-10 pt-10">
            <img src={solution1} alt="Solution 1" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p>Lorem ipsum dolor sit amet consectetur, adipisi..</p>
            <div className="card-actions">
              <a
                className="bg-[#132647] hover:bg-[#082D6C] text-white shadow-2xl pt-2"
                href="/blog"
                style={{
                  width: "132px",
                  height: "44px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px",
                }}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div
          className="card w-full shadow-2xl border-8 border-solid border-[#082D6C]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure className="px-10 pt-10">
            <img src={solution2} alt="Solution 2" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p>Lorem ipsum dolor sit amet consectetur, adipisi..</p>
            <div className="card-actions">
              <a
                className="bg-[#132647] hover:bg-[#082D6C] text-white shadow-2xl pt-2"
                href="/blog"
                style={{
                  width: "132px",
                  height: "44px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px",
                }}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div
          className="card w-full shadow-2xl border-8 border-solid border-[#082D6C]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure className="px-10 pt-10">
            <img src={solution3} alt="Solution 3" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p>Lorem ipsum dolor sit amet consectetur, adipisi..</p>
            <div className="card-actions">
              <a
                className="bg-[#132647] hover:bg-[#082D6C] text-white shadow-2xl pt-2"
                href="/blog"
                style={{
                  width: "132px",
                  height: "44px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px",
                }}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div
          className="card w-full shadow-2xl border-8 border-solid border-[#082D6C]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure className="px-10 pt-10">
            <img src={solution4} alt="Solution 4" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p>Lorem ipsum dolor sit amet consectetur, adipisi..</p>
            <div className="card-actions">
              <a
                className="bg-[#132647] hover:bg-[#082D6C] text-white shadow-2xl pt-2"
                href="/blog"
                style={{
                  width: "132px",
                  height: "44px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px",
                }}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-3/4 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-[#021D49]">
        <img src={partner1} alt="Partner1" />
        <img src={partner2} alt="Partner1" />
        <img src={partner3} alt="Partner1" />
        <img className="pt-6" src={partner4} alt="Partner1" />
        <img src={partner5} alt="Partner1" />
      </div>
    </div>
  );
};

export default Deltapath;
