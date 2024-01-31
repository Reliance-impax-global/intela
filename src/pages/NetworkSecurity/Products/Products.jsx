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
    <div className="bg-[#082C6B] py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-28 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full px-20  md:py-10 bg-[#082C6B] text-white rounded-2xl shadow-2xl">
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
              <a
                className="bg-[#132647] hover:bg-[#082D6C] text-white shadow-2xl pt-2 pl-7"
                href="/network-security"
                style={{
                  width: "132px",
                  height: "44px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px",
                }}
              >
                Learn More
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
            <img className="w-full" src={network2} alt="Network 2" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">APP SECURITY</h2>
            <p>
              Automatically crawl and assess web applications to identify
              vulnerabilities like SQL Injection, XSS, and CSRF.
            </p>
            <div className="card-actions justify-start">
              <a
                className="bg-[#132647] hover:bg-[#082D6C] text-white shadow-2xl pt-2 pl-7"
                href="/network-security"
                style={{
                  width: "132px",
                  height: "44px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px",
                }}
              >
                Learn More
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
              <a
                className="bg-[#132647] hover:bg-[#082D6C] text-white shadow-2xl pt-2 pl-7"
                href="/network-security"
                style={{
                  width: "132px",
                  height: "44px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px",
                }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
