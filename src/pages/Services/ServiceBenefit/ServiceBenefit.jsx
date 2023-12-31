import benefit1 from "../../../assets/services/Vector.png";
import benefit2 from "../../../assets/services/Vector (1).png";
import benefit3 from "../../../assets/services/Vector (2).png";
import benefit4 from "../../../assets/services/Vector (3).png";
import benefit5 from "../../../assets/services/Vector (4).png";
const ServiceBenefit = () => {
  return (
    <div className="mx-4 md:mx-8 lg:mx-20 shadow-2xl">
      <div>
        <h2 className="text-white text-left px-4 md:ml-28">
          INDUSTRIES THAT CAN BENEFIT FROM SERVICES SOLUTION, WE HELP THE
          COMPANY TO CREATE THEIR <br />
          DIGITAL CONTENT ONLINE AND MARKETING
        </h2>
      </div>

      <div className="py-16 md:ml-24 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 rounded-2xl shadow-2xl">
        <div className="grid grid-cols-2 gap-5 row-gap-5 sm:grid-cols-3 lg:grid-cols-6">
          <div className="text-center border rounded-lg shadow-2xl">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-12 sm:h-12 animate-bounce">
              <img src={benefit1} alt="" />
            </div>
            <h6 className="mb-2 text-sm text-white font-bold leading-5 tracking-wider uppercase">
              Travel & Tourism
            </h6>
          </div>
          <div className="text-center  border rounded-lg shadow-2xl">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-12 sm:h-12 animate-bounce">
              <img src={benefit2} alt="" />
            </div>
            <h6 className="mb-2 text-sm text-white font-bold leading-5 tracking-wider uppercase">
              Realestate
            </h6>
          </div>
          <div className="text-center  border rounded-lg shadow-2xl">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-12 sm:h-12 animate-spin">
              <img src={benefit3} alt="" />
            </div>
            <h6 className="mb-2 text-sm text-white font-bold leading-5 tracking-wider uppercase">
              Hospitality & healthcare
            </h6>
          </div>
          <div className="text-center  border rounded-lg shadow-2xl">
            <div className="flex items-center justify-center text-white w-10 h-10 mx-auto mb-4 sm:w-12 sm:h-12 animate-pulse">
              <img style={{ filter: "invert(100%)" }} src={benefit4} alt="" />
            </div>
            <h6 className="mb-2 text-sm text-white font-bold leading-5 tracking-wider uppercase">
              Hotels & Restaurants
            </h6>
          </div>
          <div className="text-center border rounded-lg shadow-2xl">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 sm:w-12 sm:h-12 animate-bounce">
              <img style={{ filter: "invert(100%)" }} src={benefit5} alt="" />
            </div>
            <h6 className="mb-2 text-sm text-white font-bold leading-5 tracking-wider uppercase">
              Online Training
            </h6>
          </div>
        </div>
      </div>
      <p className="text-sm text-justify text-white px-4">
        Our digital marketing team can help in developing the contents and
        digitalise them for clients in a various forms. We are dedicated to help
        businesses in the travel, hotel & restaurant, education, healthcare, and
        real estate industries gain more leads, conversions, and loyal
        customers.Thinking to generate the leads for your business is always the
        first step for your long term success, whether it’s through your
        website, your Facebook channel, or a dedicated landing page, there are
        many options to choose from. There are also many ways to produce those
        leads including through SEO, SEM, direct response ads, social media
        marketing, direct mail campaigns, partnerships and more! With so many
        options available, it’s important to determine what constitutes a
        valuable lead for your business. After all, you don’t want to spend time
        on leads that ultimately won’t be profitable for you. We can be your
        consultant to help you with a better planning on this.
      </p>
    </div>
  );
};

export default ServiceBenefit;
