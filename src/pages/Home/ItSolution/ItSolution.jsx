import { useEffect } from "react";
import solution1 from "../../../assets/images/it-solution-1.png";
import solution2 from "../../../assets/images/it-solution-2.png";
import solution3 from "../../../assets/images/it-solution-3.png";
import solution4 from "../../../assets/images/it-solution-4.png";
import AOS from "aos";
import "aos/dist/aos.css";

const ItSolution = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-[#021D49] pb-20">
      <h2 className="text-3xl text-white font-bold mx-4 sm:mx-20 py-5">
        IT SOLUTION AND SERVICES
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 shadow-2xl mx-4 sm:mx-20 bg-[#205ed14d] text-white rounded-2xl border-8 border-solid border-[#082D6C]">
        <div
          className="card w-full sm:w-full md:w-[calc(100%-1rem)] lg:w-[calc(33.33% - 1rem)] xl:w-[calc(25% - 1rem)] shadow-2xl border-8 border-solid border-[#082D6C]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure className="pt-10">
            <img
              src={solution1}
              alt="Solution1"
              className="rounded-xl w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">INFRASTRUCTURE AND SECURITY PRODUCT</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              eos minima incidunt.
            </p>
            <div className="card-actions">
              <a
                className="bg-[#132647] hover:bg-[#082D6C] text-white shadow-2xl pt-2"
                href="/cyber-security"
                style={{
                  width: "132px",
                  height: "44px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px",
                }}
              >
                Details
              </a>
            </div>
          </div>
        </div>
        <div
          className="card w-full sm:w-full md:w-[calc(100%-1rem)] lg:w-[calc(33.33% - 1rem)] xl:w-[calc(25% - 1rem)] shadow-2xl border-8 border-solid border-[#082D6C]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure className=" pt-10">
            <img
              src={solution2}
              alt="Solution2"
              className="rounded-xl w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">VOIP AND CONFERENCE SOLUTION</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              eos minima incidunt.
            </p>
            <div className="card-actions">
              <a
                className="bg-[#132647] hover:bg-[#082D6C] text-white shadow-2xl pt-2"
                href="/solution"
                style={{
                  width: "132px",
                  height: "44px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px",
                }}
              >
                Details
              </a>
            </div>
          </div>
        </div>
        <div
          className="card w-full sm:w-full md:w-[calc(100%-1rem)] lg:w-[calc(33.33% - 1rem)] xl:w-[calc(25% - 1rem)] shadow-2xl border-8 border-solid border-[#082D6C]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure className="pt-10">
            <img
              src={solution3}
              alt="Solution3"
              className="rounded-xl w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">APPLICATION DEV AND INTEGRATION</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              eos minima incidunt.
            </p>
            <div className="card-actions">
              <a
                className="bg-[#132647] hover:bg-[#082D6C] text-white shadow-2xl pt-2"
                href="/application"
                style={{
                  width: "132px",
                  height: "44px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px",
                }}
              >
                Details
              </a>
            </div>
          </div>
        </div>
        <div
          className="card w-full sm:w-full md:w-[calc(100%-1rem)] lg:w-[calc(33.33% - 1rem)] xl:w-[calc(25% - 1rem)] shadow-2xl border-8 border-solid border-[#082D6C]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure className="pt-10">
            <img
              src={solution4}
              alt="Solution4"
              className="rounded-xl w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">PROJECT AND CONSULTANCY</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              eos minima incidunt.
            </p>
            <div className="card-actions">
              <a
                className="bg-[#132647] hover:bg-[#082D6C] text-white shadow-2xl pt-2"
                href="/partner-services"
                style={{
                  width: "132px",
                  height: "44px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px",
                }}
              >
                Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItSolution;
