import whoWeAre from "../../../assets/images/who-we-are.png";

const WhoWeAre = () => {
  return (
    <div className="px-4 md:px-8 lg:px-20 py-8 md:py-12 bg-gradient-to-r from-[rgba(10,22,44,0.97)] via-[rgba(2,61,171,0.95)] to-[rgba(9,12,11,0.95)] text-white">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left mb-4 md:mb-6 text-white">
        WHO WE ARE
      </h2>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:me-6">
          <p className="text-sm md:text-base lg:text-lg text-justify text-white">
            We are known to be the solution provider and system integrator who
            has a portfolio of products and services to offer to our clients,
            including SaaS applications and On-premise solutions, depending on
            the client deployment model to make it relevant to corporate
            directions for their digital transformation. Our services include
            providing consultancy, project management, and other outsourcing and
            product sales. We offer services for a VOIP-based Unified
            communication platform that can be subscribed to monthly and yearly.
            This is to bolster Small and Medium Businesses across the globe. The
            IntelaSolution has been serving businesses with effective
            connectivity solutions since 2015. Headquartered in Bangkok,
            Thailand, we work along with vendors and application providers to
            ensure the solution meets your requirements for unmatched continuity
            with services. To make it even better, we have trained engineers
            available to assist you instantly when you need them.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={whoWeAre}
            alt="Who we are Image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
