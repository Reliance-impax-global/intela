import { useEffect } from "react";
import pswd1 from "../../../assets/pertnerServices/pswd1.png";
import pswd2 from "../../../assets/pertnerServices/pswd2.png";
import pswd3 from "../../../assets/pertnerServices/pswd3.png";
import pswd4 from "../../../assets/pertnerServices/pswd4.png";
import Aos from "aos";
import { Link } from "react-router-dom";

const PsWdService = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-[#021D49] text-white pb-10">
      <div className="pt-14 text-center">
        <h2
          className=" text-2xl md:text-5xl"
          style={{ fontFamily: "Roboto", fontWeight: 500 }}
        >
          WEB DEVELOPMENT
        </h2>
        <p className="text-center py-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad sunt,
          ipsa quaerat tenetur sequi <br /> perferendis quos totam facere minima{" "}
        </p>
        <Link
          to="/web-development"
          className="btn bg-[#BD981B] hover:bg-blue-950 text-white w-full md:w-[150px] mr-0 md:mr-4 mb-2 md:mb-0"
        >
          View All Services
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ml-4 sm:ml-8 md:mx-16 lg:mx-20 my-6 sm:my-8 md:my-10 lg:my-12 bg-[#082C6B] shadow-2xl border-8 border-solid border-[#082D6C] rounded-2xl">
        <div
          className="card w-full shadow-2xl border-8 border-solid border-[#082D6C]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure className="px-10 pt-10">
            <img src={pswd1} alt="Solution 1" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p>
              Custom Website
              <br /> Development
            </p>
            <div className="card-actions pt-5">
              <a
                className="bg-[#132647] hover:bg-[#082D6C] text-white shadow-2xl pt-2"
                href="/web-development"
                style={{
                  width: "132px",
                  height: "44px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px",
                }}
              >
                View Details
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
            <img src={pswd2} alt="Solution 2" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p>
              E Commerce <br />
              Website
            </p>
            <div className="card-actions pt-5">
              <a
                className="bg-[#132647] hover:bg-[#082D6C] text-white shadow-2xl pt-2"
                href="/web-development"
                style={{
                  width: "132px",
                  height: "44px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px",
                }}
              >
                View Details
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
            <img
              src={pswd3}
              alt="Pertner Services Web Development 3"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <p>
              WordPress
              <br /> Website
            </p>
            <div className="card-actions pt-5">
              <a
                className="bg-[#132647] hover:bg-[#082D6C] text-white shadow-2xl pt-2"
                href="/web-development"
                style={{
                  width: "132px",
                  height: "44px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px",
                }}
              >
                View Details
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
            <img
              src={pswd4}
              alt="Pertner Services Web Development 4"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <p>
              Portfolio
              <br /> Website
            </p>
            <div className="card-actions pt-5">
              <a
                className="bg-[#132647] hover:bg-[#082D6C] text-white shadow-2xl pt-2"
                href="/web-development"
                style={{
                  width: "132px",
                  height: "44px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px",
                }}
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsWdService;
