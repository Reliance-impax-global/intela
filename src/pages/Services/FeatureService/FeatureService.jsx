import service1 from "../../../assets/services/search-1 1.png";
import service2 from "../../../assets/services/google-ads-logo 1.png";
import service3 from "../../../assets/services/horn 1.png";
import service4 from "../../../assets/services/app-window-code 1.png";
import service5 from "../../../assets/services/browser-page-media 1.png";
import service6 from "../../../assets/services/send-email 1.png";
import service7 from "../../../assets/services/service7.jpg";
import service8 from "../../../assets/services/subtitles 1.png";
const FeatureService = () => {
  return (
    <div className="px-4 py-16 mx-4 md:mx-8 lg:mx-20 backdrop:sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-[#091424] text-white shadow-2xl">
      <div className="grid gap-8 row-gap-5 sm:row-gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-bounce">
            <img
              className="w-1/2 hover:animate-ping"
              src={service1}
              alt="service1"
            />
          </div>
          <h6 className="mb-2 font-semibold leading-5">
            SEARCH ENGINE OPTIMISATION
          </h6>
          <ul className="mb-3 text-sm list-disc">
            <li> Result driven SEO strategy</li>
            <li>White Hat On page & Off page</li>
            <li>Link Building</li>
            <li>Detailed Analytics Report</li>
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-pulse">
            <img
              className="w-1/2 hover:animate-ping"
              src={service2}
              alt="service1"
            />
          </div>
          <h6 className="mb-2 font-semibold leading-5">GOOGLE ADS</h6>
          <ul className="mb-3 text-sm list-disc">
            <li> Google Certified Expert</li>
            <li>Max Relevant Keywords Coverage</li>
            <li>Pay per Click Strategy</li>
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-pulse">
            <img
              className="w-1/2 hover:animate-ping"
              src={service3}
              alt="service1"
            />
          </div>
          <h6 className="mb-2 font-semibold leading-5">
            SOCIAL MEDIA MARKETING
          </h6>
          <ul className="mb-3 text-sm list-disc">
            <li> Build relevant target audience Base</li>
            <li>Engagement post for Audience</li>
            <li>Detailed Insight Report</li>
            <li>Engaging Social Media Contest</li>
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-bounce">
            <img
              className="w-1/2 hover:animate-ping"
              src={service4}
              alt="service1"
            />
          </div>
          <h6 className="mb-2 font-semibold leading-5">SMS MARKETING</h6>
          <ul className="mb-3 text-sm list-disc">
            <li> Customised Sender ID</li>
            <li>DND / NON DND route</li>
            <li>Bulk SMS Service</li>
            <li>Detailed report</li>
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-pulse">
            <img
              className="w-1/2 hover:animate-ping"
              src={service5}
              alt="service5"
            />
          </div>
          <h6 className="mb-2 font-semibold leading-5">
            CUSTOMISED LANDING PAGE
          </h6>
          <ul className="mb-3 text-sm list-disc">
            <li> SEO based design</li>
            <li>Unique Optimized template</li>
            <li>Responsive for all devices</li>
            <li>Customized form for Lead submission</li>
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-bounce">
            <img
              className="w-1/2 hover:animate-ping"
              src={service6}
              alt="service6"
            />
          </div>
          <h6 className="mb-2 font-semibold leading-5">EMAIL MARKETING</h6>
          <ul className="mb-3 text-sm list-disc">
            <li> Build relevant target audience Base</li>
            <li>Engagement post for Audience</li>
            <li>Detailed Insight Report</li>
            <li>Engaging Social Media Contest</li>
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-pulse">
            <img
              className="w-1/2 hover:animate-ping"
              src={service7}
              alt="service6"
            />
          </div>
          <h6 className="mb-2 font-semibold leading-5">WEBSITE DEVELOPMENT</h6>
          <ul className="mb-3 text-sm list-disc">
            <li> Ecommerce Website</li>
            <li>Business Website</li>
            <li>Extreme Typography</li>
            <li>PHP Development</li>
            <li>Css, Shopify, Html Language</li>
            <li>Page optimization</li>
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-yellow-500 animate-bounce">
            <img
              className="w-1/2 hover:animate-ping"
              src={service8}
              alt="service6"
            />
          </div>
          <h6 className="mb-2 font-semibold leading-5">APP DEVELOPMENT</h6>
          <ul className="mb-3 text-sm list-disc">
            <li> SEO based design</li>
            <li>Unique Optimized template</li>
            <li>Responsive for all devices</li>
            <li>Customized form for Lead submission</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeatureService;
