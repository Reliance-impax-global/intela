import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Deltapath = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-[#091424] py-8 sm:py-12 md:py-16 lg:py-20 text-white px-4 sm:px-8 md:px-16 lg:px-20">
      <p className="pb-6 sm:pb-8 md:pb-10 lg:pb-12">
        Deltapath Mobile application & Deltapath Engage can be downloaded easily
        by clicking the icon – once your application is downloaded then you can
        reach our sales team to provide you the username & password for further
        testing.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        <div
          className="card w-96 bg-neutral text-neutral-content py-20"
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
          className="card w-96 bg-neutral text-neutral-content py-20"
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
          className="card w-96 bg-neutral text-neutral-content py-20"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ml-4 sm:ml-8 md:ml-16 lg:ml-20 my-6 sm:my-8 md:my-10 lg:my-12">
        <div
          className="card w-2/3 h-36 bg-white text-black"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <div className="card-body">
            <h2 className="card-title">How webRTC can be...</h2>

            <div className="text-left">
              <span>Read More</span>
            </div>
          </div>
        </div>
        <div
          className="card w-2/3 h-36 bg-white text-black"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <div className="card-body">
            <h2 className="card-title">How Deltapath...</h2>

            <div className="text-left">
              <span>Read More</span>
            </div>
          </div>
        </div>
        <div
          className="card w-2/3 h-36 bg-white text-black"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <div className="card-body">
            <h2 className="card-title">8 easy SEO Tips For...</h2>

            <div className="text-left">
              <span>Read More</span>
            </div>
          </div>
        </div>
        <div
          className="card w-2/3 h-36 bg-white text-black"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <div className="card-body">
            <h2 className="card font-bold">Top 10 digital Marketing...</h2>
            <div className="text-left">
              <span>Read More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deltapath;
