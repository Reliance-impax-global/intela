import { useEffect } from "react";
import psad1 from "../../../assets/pertnerServices/psad1.png";
import psad2 from "../../../assets/pertnerServices/psad2.png";
import psad3 from "../../../assets/pertnerServices/psad3.png";

import Aos from "aos";
import { Link } from "react-router-dom";

const PsAdService = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-[#021D49] text-white pb-10 z-[100]">
      <div className="pt-14 text-center">
        <h2
          className=" text-2xl md:text-5xl"
          style={{ fontFamily: "Roboto", fontWeight: 500 }}
        >
          APP DEVELOPMENT
        </h2>
        <p className="text-center py-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad sunt,
          ipsa quaerat tenetur sequi <br /> perferendis quos totam facere minima{" "}
        </p>
        <Link
          to="/app-development"
          className="btn bg-[#BD981B] hover:bg-blue-950 text-white w-full md:w-[150px] z-50 mr-0 md:mr-4 mb-2 md:mb-0"
        >
          View All Services
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-4 sm:ml-8 md:mx-16 lg:mx-20 my-6 sm:my-8 md:my-10 lg:my-12 bg-[#082C6B] shadow-2xl border-8 border-solid border-[#082D6C] rounded-2xl">
        <div
          className="card w-full shadow-2xl border-8 border-solid border-[#082D6C]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure className="px-10 pt-10">
            <img src={psad1} alt="Solution 1" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p>UX/UI Design</p>
            <div className="card-actions pt-5">
              <a className="btn bg-[#082D6C] hover:bg-blue-950 outline-none rounded-xl text-white">
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
            <img src={psad2} alt="Solution 2" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p>
              Android App <br />
              Development
            </p>
            <div className="card-actions pt-5">
              <a
                className="btn bg-[#082D6C] hover:bg-blue-950 outline-none rounded-xl text-white"
                href="#"
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
              src={psad3}
              alt="Pertner Services App Development 3"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <p>
              IOS App
              <br /> Development
            </p>
            <div className="card-actions pt-5">
              <a
                className="btn bg-[#082D6C] hover:bg-blue-950 outline-none rounded-xl text-white"
                href="#"
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

export default PsAdService;
