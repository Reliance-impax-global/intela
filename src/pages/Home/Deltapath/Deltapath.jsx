import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import solution1 from "../../../assets/images/it-solution-1.png";
import solution2 from "../../../assets/images/it-solution-2.png";
import solution3 from "../../../assets/images/it-solution-3.png";
import solution4 from "../../../assets/images/it-solution-4.png";
const Deltapath = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-gradient-to-r from-[rgba(9,19,37,0.97)] via-[rgba(2,61,171,0.95)] to-[rgba(9,12,11,0.95)] py-8 sm:py-12 md:py-16 lg:py-20 text-white px-4 sm:px-8 md:px-16 lg:px-20">
      <p className="pb-6 sm:pb-8 md:pb-10 lg:pb-12">
        Deltapath Mobile application & Deltapath Engage can be downloaded easily
        by clicking the icon – once your application is downloaded then you can
        reach our sales team to provide you the username & password for further
        testing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-11">
        <div
          className="card w-full bg-neutral text-neutral-content py-20"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <div className="card-body items-center text-center">
            <h2 className="card-title mb-2">Deltapath Engage</h2>
            <p className="mb-2">Mac App store</p>
            <div className="card-actions justify-end">
              <button className="w-[121px] bg-yellow-500 mr-40 rounded-lg ml-32">
                Download
              </button>
            </div>
          </div>
        </div>
        <div
          className="card w-full bg-neutral text-neutral-content py-20"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <div className="card-body items-center text-center">
            <h2 className="card-title mb-2">Deltapath Engage</h2>
            <p className="mb-2">Apple Store</p>
            <div className="card-actions justify-end">
              <button className="w-[121px] bg-yellow-500 mr-40 rounded-lg ml-32">
                Download
              </button>
            </div>
          </div>
        </div>
        <div
          className="card w-full bg-neutral text-neutral-content py-20"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <div className="card-body items-center text-center">
            <h2 className="card-title mb-2">Deltapath Engage</h2>
            <p className="mb-2">Play Store</p>
            <div className=" text-center">
              <button className="w-[121px] bg-yellow-500 mr-40 rounded-lg ml-32">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-14">
        <h2 className="text-center text-3xl">Our Recently Posted Blog</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ml-4 sm:ml-8 md:ml-16 lg:ml-20 my-6 sm:my-8 md:my-10 lg:my-12">
        <div
          className="card w-full  shadow-xl"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure className="px-10 pt-10">
            <img src={solution1} alt="Solution 1" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p>Lorem ipsum dolor sit amet consectetur, adipisi..</p>
            <div className="card-actions">
              <button className="btn bg-[#132541] rounded-xl text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div
          className="card w-full  shadow-xl"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure className="px-10 pt-10">
            <img src={solution2} alt="Solution 2" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p>Lorem ipsum dolor sit amet consectetur, adipisi..</p>
            <div className="card-actions">
              <button className="btn bg-[#132541] rounded-xl text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div
          className="card w-full shadow-xl"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure className="px-10 pt-10">
            <img src={solution3} alt="Solution 3" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p>Lorem ipsum dolor sit amet consectetur, adipisi..</p>
            <div className="card-actions">
              <button className="btn bg-[#132541] rounded-xl text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div
          className="card w-full shadow-xl"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure className="px-10 pt-10">
            <img src={solution4} alt="Solution 4" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p>Lorem ipsum dolor sit amet consectetur, adipisi..</p>
            <div className="card-actions">
              <button className="btn bg-[#132541] rounded-xl text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deltapath;
