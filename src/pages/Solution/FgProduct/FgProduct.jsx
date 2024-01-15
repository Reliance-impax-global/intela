import { useEffect } from "react";
import fgProduct1 from "../../../assets/solution/fg-product1.png";
import fgProduct2 from "../../../assets/solution/fg-product2.png";
import fgProduct3 from "../../../assets/solution/fg-product3.png";
import Aos from "aos";
const FgProduct = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-[#021D4A] text-white pt-5">
      <h2
        className="text-center text-xl Md:text-2xl lg:text-3xl"
        style={{ fontFamily: "Antic", fontWeight: 400 }}
      >
        OUR FLAGSHIP PRODUCT
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-5 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full px-20  md:py-10 rounded-2xl shadow-2xl">
        <div
          className="card w-full pt-5 shadow-2xl bg-[#082C6B]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure>
            <img
              className="w-11/12"
              src={fgProduct1}
              alt="Flagship Product 1"
            />
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
          className="card w-full pt-5 shadow-xl bg-[#082C6B]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure>
            <img
              className="w-11/12"
              src={fgProduct2}
              alt="Flagship Product 1"
            />
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
          className="card w-full pt-5 shadow-xl bg-[#082C6B]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure>
            <img
              className="w-11/12"
              src={fgProduct3}
              alt="Flagship Product 1"
            />
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
