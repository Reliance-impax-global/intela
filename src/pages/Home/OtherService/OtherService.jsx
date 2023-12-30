import otherService1 from "../../../assets/images/other-service1.png";
import otherService2 from "../../../assets/images/other-service2.png";
import otherService3 from "../../../assets/images/other-service3.png";
import otherService4 from "../../../assets/images/other-service4.png";

const OtherService = () => {
  return (
    <div className="bg-[#091424]">
      <h2 className="text-3xl text-white font-bold mx-4 sm:mx-20 py-5">
        OTHER SERVICE OFFERING
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-3 shadow-2xl mx-4 sm:mx-20 bg-[#132541] text-white rounded-2xl">
        <div className="card w-full sm:w-full md:w-[calc(100%-1rem)] lg:w-[calc(33.33% - 1rem)] xl:w-[calc(25% - 1rem)] shadow-xl">
          <figure className="pt-10">
            <img src={otherService1} alt="Solution1" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">DIGITAL CONTENT MARKETING</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              eos minima incidunt.
            </p>
            <div className="card-actions">
              <button className="btn bg-[#132541] rounded-xl text-white">
                Details
              </button>
            </div>
          </div>
        </div>
        <div className="card w-full sm:w-full md:w-full lg:w-[calc(33.33% - 1rem)] xl:w-[calc(25% - 1rem)] shadow-xl">
          <figure className=" pt-10">
            <img src={otherService2} alt="Solution2" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">TOUR AND TRAVEL SERVICE</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              eos minima incidunt.
            </p>
            <div className="card-actions">
              <button className="btn bg-[#132541] rounded-xl text-white">
                Details
              </button>
            </div>
          </div>
        </div>
        <div className="card w-full sm:w-full md:w-full lg:w-[calc(33.33% - 1rem)] xl:w-[calc(25% - 1rem)] shadow-xl">
          <figure className="pt-10">
            <img src={otherService3} alt="Solution3" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">IMPORT AND EXPORT</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              eos minima incidunt.
            </p>
            <div className="card-actions">
              <button className="btn bg-[#132541] rounded-xl text-white">
                Details
              </button>
            </div>
          </div>
        </div>
        <div className="card w-full sm:w-full md:w-[calc(100% - 1rem)] lg:w-[calc(33.33% - 1rem)] xl:w-[calc(25% - 1rem)] shadow-xl">
          <figure className="pt-10">
            <img src={otherService4} alt="Solution4" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">RENOVATION AND CONSTRUCTION</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              eos minima incidunt.
            </p>
            <div className="card-actions">
              <button className="btn bg-[#132541] rounded-xl text-white">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherService;
