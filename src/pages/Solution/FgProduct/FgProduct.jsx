import { useEffect } from "react";
import network1 from "../../../assets/images/network1.png";
import network2 from "../../../assets/images/network2.png";
import network3 from "../../../assets/images/network3.png";
import Aos from "aos";
const FgProduct = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-[#001941] text-white">
      <h2
        className="text-center text-xl Md:text-2xl lg:text-3xl"
        style={{ fontFamily: "Antic", fontWeight: 400 }}
      >
        OUR FLAGSHIP PRODUCT
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full px-20  md:py-10 rounded-2xl shadow-2xl">
        <div
          className="card w-full shadow-2xl"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure>
            <img className="w-10/12" src={network1} alt="Network 1" />
          </figure>
          <div className="card-body">
            <h2 className="card">Deltapath Acute</h2>

            <div className="card-actions justify-end">
              <a className=" text-yellow-500" href="#">
                Read more &gt;
              </a>
            </div>
          </div>
        </div>
        <div
          className="card w-full shadow-xl"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure>
            <img className="w-10/12" src={network2} alt="Network 2" />
          </figure>
          <div className="card-body">
            <h2 className="card">Deltapath Push-To-Talk</h2>

            <div className="card-actions justify-end">
              <a className=" text-yellow-500" href="#">
                Read more &gt;
              </a>
            </div>
          </div>
        </div>
        <div
          className="card w-full shadow-xl"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure>
            <img className="w-10/12" src={network3} alt="Network 3" />
          </figure>
          <div className="card-body">
            <h2 className="card">Deltapath UC Service Provider Edition</h2>

            <div className="card-actions justify-end">
              <a className=" text-yellow-500" href="#">
                Read more &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FgProduct;
