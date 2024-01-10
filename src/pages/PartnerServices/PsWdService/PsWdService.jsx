import { useEffect } from "react";
import pswd1 from "../../../assets/pertnerServices/pswd1.png";
import pswd2 from "../../../assets/pertnerServices/pswd2.png";
import pswd3 from "../../../assets/pertnerServices/pswd3.png";
import pswd4 from "../../../assets/pertnerServices/pswd4.png";
import Aos from "aos";

const PsWdService = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-[#021D49] text-white pb-10">
      <div className="pt-14 text-center">
        <h2
          className=" text-3xl"
          style={{ fontFamily: "Roboto", fontWeight: 500, fontSize: "48px" }}
        >
          WEB DEVELOPMENT
        </h2>
        <p className="text-center py-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad sunt,
          ipsa quaerat tenetur sequi <br /> perferendis quos totam facere minima{" "}
        </p>
        <a className="btn bg-[#BD981B] text-white w-full md:w-[150px] mr-0 md:mr-4 mb-2 md:mb-0">
          View All Services
        </a>
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
              <button className="btn bg-[#082D6C] outline-none rounded-xl text-white">
                View Details
              </button>
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
              <button className="btn bg-[#082D6C] outline-none rounded-xl text-white">
                View Details
              </button>
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
              <button className="btn bg-[#082D6C] outline-none rounded-xl text-white">
                View Details
              </button>
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
              <button className="btn bg-[#082D6C] outline-none rounded-xl text-white">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsWdService;
