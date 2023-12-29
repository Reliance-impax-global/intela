import whoWeAre from "../../../assets/images/who-we-are.png";

const WhoWeAre = () => {
  return (
    <div className="px-20 py-20 bg-[#091424]">
      <h2 className="text-xl font-bold text-left mb-2 text-white">
        WHO WE ARE
      </h2>
      <div className="flex">
        <div className="w-1/2 me-10">
          <p className="text-justify text-white">
            We are known to be the solution provider and system integrator who
            has the portfolio of products and services to offer to our client
            which includes SaaS Application and On-premise solution depending on
            the client deployment model in order to make it relevant to
            corporate direction for their digital transformation. Our services
            include providing consultancy, project management and other
            outsourcing and product sales. We have our service offering for a
            VOIP based Unified communication platform which can be subscribed
            for monthly and yearly services. This is to bolster the Small and
            Medium Businesses across the globe. The IntelaSolution has been
            serving the business with effective connectivity solutions since
            2015. Headquartered in Bangkok, Thailand. We work along with vendors
            and application providers to ensure the solution meets your
            requirements for unmatched continuity with the services. To make it
            even better, we have trained engineers available to assist you
            instantly when you need them. requirements for unmatched continuity
            with the services. To make it even better, we have trained engineers
            available to assist you instantly when you need them.
          </p>
        </div>
        <div className="w-1/2">
          <img src={whoWeAre} alt="Who we are Image" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
