import { useEffect } from "react";
import articlesImg1 from "../../../assets/solution/articles-img1.png";
import articlesImg2 from "../../../assets/solution/articles-img2.png";
import articlesImg3 from "../../../assets/solution/articles-img3.png";
import articlesImg4 from "../../../assets/solution/articles-img4.png";
import articlesImg5 from "../../../assets/solution/articles-img5.png";
import articlesImg6 from "../../../assets/solution/articles-img6.png";
import Aos from "aos";

const Articles = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-[#021D4A] text-white">
      <h2
        className="text-left text-xl Md:text-2xl lg:text-3xl pl-20 pt-10"
        style={{ fontFamily: "Antic", fontWeight: 400 }}
      >
        WE ARE HERE TO HELP YOUR BUSINESS
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
              src={articlesImg1}
              alt="Articles Image 1"
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
              src={articlesImg2}
              alt="Articles Image 2"
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
              src={articlesImg3}
              alt="Articles Image 3"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-5 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full px-20  md:py-10 rounded-2xl shadow-2xl">
        <div
          className="card w-full pt-5 shadow-2xl bg-[#082C6B]"
          data-aos="flip-left"
          data-aos-duration="3000"
        >
          <figure>
            <img
              className="w-11/12"
              src={articlesImg4}
              alt="Articles Image 4"
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
              src={articlesImg5}
              alt="Articles Image 5"
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
              src={articlesImg6}
              alt="Articles Image 6"
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
      <div className="text-center py-10">
        <a
          className="btn bg-[#BD981B] hover:bg-blue-950 hover:text-white text-[rgba(43, 42, 42, 1)] w-full md:w-[180px] mr-0 md:mr-4 mb-2 md:mb-0"
          href="/blog"
        >
          Explore more Article
        </a>
      </div>
    </div>
  );
};

export default Articles;
