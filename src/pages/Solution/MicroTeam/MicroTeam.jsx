import microTeam from "../../../assets/solution/micro-team.png";

const MicroTeam = () => {
  return (
    <div className="bg-[#021D4A] px-20">
      <div className="flex flex-col-reverse md:flex-row justify-around text-justify py-10 px-4 md:px-8 lg:px-20 bg-[#082C6B] text-white shadow-2xl rounded-2xl">
        <div className="w-full md:w-1/2 md:pr-4 lg:pr-10">
          <h2 className="text-xl md:text-xl lg:text-xl font-bold pb-5">
            MICROSOFT TEAM INTEGRATION WITH DELTAPATH
          </h2>
          <p>
            IF YOU ARE NOT A DELTAPATH CUSTOMER, YOU CAN STILL GET TELEPHONY
            SERVICES ON MS TEAM FOR FREE EVEN SIMPLY BY HAVING OFFICE 365 E1
            LICENSE Deltapath solution allows MS TEAM users to connect with our
            system for VOIP & Telephony calls where users simply do not require
            to purchase any other license except Office 365 E1 license only.
            Microsoft Team users can simply connect to the meeting room & dial
            with any other participants calling through PSTN or Land Line Number
            simply without making any other extra configuration.
          </p>
          <p className="pt-6 md:pt-10">
            Deltapath TALK Plug-in can be installed on MS TEAM application to be
            able to allow MS TEAM users to pick up the phone easily. FOR MORE
            INFORMATION - YOU CAN REACH TO OUR SALES TEAM CONTACT +66 62
            949-2899
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={microTeam}
            alt="Microsoft Team"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default MicroTeam;
