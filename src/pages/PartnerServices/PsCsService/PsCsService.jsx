import { useEffect } from "react";
import pscss1 from "../../../assets/pertnerServices/pscss1.png";
import pscss2 from "../../../assets/pertnerServices/pscss2.png";
import pscss3 from "../../../assets/pertnerServices/pscss3.png";
import pscss4 from "../../../assets/pertnerServices/pscss4.png";
import Aos from "aos";
import { Link } from "react-router-dom";

const PsCsService = () => {
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
          CYBER SECURITY SERVICES
        </h2>
        <p className="text-center py-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad sunt,
          ipsa quaerat tenetur sequi <br /> perferendis quos totam facere minima{" "}
        </p>
        <Link
          to="/cyber-security"
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
            <img
              src={pscss1}
              alt="Pertner Services Cyber Security Service 1"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <p>
              Custom Website
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
        <div
          className="card w-full shadow-2xl border-8 border-solid border-[#082D6C]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure className="px-10 pt-10">
            <img
              src={pscss2}
              alt="Pertner Services Cyber Security Service 2"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <p>
              E Commerce <br />
              Website
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
              src={pscss3}
              alt="Pertner Services Cyber Security Service 3"
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
              src={pscss4}
              alt="Pertner Services Cyber Security Service 4"
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

export default PsCsService;
