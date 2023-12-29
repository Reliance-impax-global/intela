import solution1 from "../../../assets/images/it-solution-1.png";
import solution2 from "../../../assets/images/it-solution-2.png";
import solution3 from "../../../assets/images/it-solution-3.png";
import solution4 from "../../../assets/images/it-solution-4.png";
const ItSolution = () => {
  return (
    <div className="bg-[#091424]">
      <h2 className="text-3xl text-white font-bold ml-20 py-1">
        IT SOLUTION AND SERVICES
      </h2>
      <div className="grid grid-cols-4 gap-1 mx-20 bg-[#132541] text-white">
        <div className="card w-full  shadow-xl">
          <figure className="pt-10">
            <img src={solution1} alt="Solution1" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">INFRASTRUCTURE AND SECURITY PRODUCT</h2>
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
        <div className="card w-full shadow-xl">
          <figure className=" pt-10">
            <img src={solution2} alt="Solution2" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">VOIP AND CONFERENCE SOLUTION</h2>
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
        <div className="card w-full shadow-xl">
          <figure className="pt-10">
            <img src={solution3} alt="Solution3" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">APPLICATION DEV AND INTEGRATION</h2>
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
        <div className="card w-full shadow-xl">
          <figure className="pt-10">
            <img src={solution4} alt="Solution4" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">PROJECT AND CONSULTANCY</h2>
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

export default ItSolution;
