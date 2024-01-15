import trCompanies1 from "../../../assets/solution/trCompanies1.png";
import trCompanies2 from "../../../assets/solution/trCompanies2.png";
import trCompanies3 from "../../../assets/solution/trCompanies3.png";
import trCompanies4 from "../../../assets/solution/trCompanies4.png";
import trCompanies5 from "../../../assets/solution/trCompanies5.png";

const TrCompanies = () => {
  return (
    <div className="bg-[#021D4A] px-5 md:px-10 lg:px-20 pb-20">
      <h2
        className="text-left text-white text-xl Md:text-2xl lg:text-3xl pl-2 py-8"
        style={{ fontFamily: "Antic", fontWeight: 400 }}
      >
        TRUSTED BY THE SMARTEST COMPANIES
      </h2>
      <div className="rounded-full bg-[#021D49] border-2 border-gray-800">
        <div className=" w-2/3 mx-auto grid grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-5">
          <img src={trCompanies1} alt="Partner1" />
          <img src={trCompanies2} alt="Partner1" />
          <img className="pt-4 w-[392px]" src={trCompanies3} alt="Partner1" />
          <img src={trCompanies4} alt="Partner1" />
          <img src={trCompanies5} alt="Partner1" />
        </div>
      </div>
    </div>
  );
};

export default TrCompanies;
