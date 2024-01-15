import client from "../../../assets/solution/client.png";

const Client = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-around text-justify py-10 px-4 md:px-8 lg:px-20 bg-[#021D4A] text-white shadow-2xl">
      <div className="w-full md:w-1/2 md:pr-4 lg:pr-10">
        <h2
          className="text-xl md:text-xl lg:text-2xl  pb-5"
          style={{ fontFamily: "Antic", fontWeight: 400 }}
        >
          CLIENTS
        </h2>
        <p style={{ fontFamily: "Inter", fontWeight: 400 }}>
          You can bring your Cisco phone and integrate on our platform to have
          all features on Cisco phone worked immediately, stop worrying about
          Cisco End of Sales/ End of Life VOIP Phone - SPECIAL PRICE !!
        </p>
        <p
          className="pt-6 md:pt-10"
          style={{ fontFamily: "Inter", fontWeight: 400 }}
        >
          Deltapath provides you with the flexibility to upgrade your phone with
          our system for half price and make your CISCO phone to be able to
          upgrade with all the updated features.
        </p>
        <p style={{ fontFamily: "Antic", fontWeight: 700 }}>
          FOR MORE INFORMATION - YOU CAN REACH TO OUR SALES TEAM +66 88 779-289
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src={client}
          alt="Microsoft Team"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Client;
