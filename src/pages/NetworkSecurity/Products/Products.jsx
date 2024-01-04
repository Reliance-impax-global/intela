import { useEffect } from "react";
import network1 from "../../../assets/images/network1.png";
import network2 from "../../../assets/images/network2.png";
import network3 from "../../../assets/images/network3.png";
import Aos from "aos";
const Products = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-[#091424] py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-28 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full px-20  md:py-10 bg-[#091424] text-white rounded-2xl shadow-2xl">
        <div
          className="card w-full shadow-2xl"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure>
            <img className="w-full" src={network1} alt="Network 1" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">NETWORK AND SECURITY</h2>
            <p>
              Get real-time protection for business-critical databases from
              external, internal, and even intra-database exploits, all in a
              software-based offering.
            </p>
            <div className="card-actions justify-start">
              <button className="btn bg-[#D9D9D91A] text-white">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div
          className="card w-full shadow-xl"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure>
            <img className="w-full" src={network2} alt="Network 2" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">APP SECURITY</h2>
            <p>
              Automatically crawl and assess web applications to identify
              vulnerabilities like SQL Injection, XSS, and CSRF.
            </p>
            <div className="card-actions justify-start">
              <button className="btn bg-[#D9D9D91A] text-white">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div
          className="card w-full shadow-xl"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure>
            <img className="w-full" src={network3} alt="Network 3" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">WEB SECURITY</h2>
            <p>
              Secure testing provides a comprehensive performance platform for
              quickly validating and optimising web and mobile user experience
              from sophisticated internet
            </p>
            <div className="card-actions justify-start">
              <button className="btn bg-[#D9D9D91A] text-white">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
