import location from "../../../assets/contact/Vector.png";
import phone from "../../../assets/contact/Vector (1).png";
import envelope from "../../../assets/contact/envelope 1.png";

const ContactForm = () => {
  return (
    <div className="bg-[#021D4A] text-white p-20">
      <div className="md:flex md:justify-around">
        <div className="sm:w-full md:w-1/3 lg:w-1/3 bg-[#082C6B] rounded-lg mb-8 md:mb-0 pb-2">
          <h2 className="mb-5 mt-10 pt-2 text-xl font-bold ml-10">
            Get in touch
          </h2>
          <p className="ml-10 text-sm pr-5">
            Use our contact form for all information requests or contact us
            directly using the contact information below. Feel free to get in
            touch with us via email or phone
          </p>
          <div className="flex  ml-10 mt-8">
            <img className="w-[20px] h-[20px]" src={location} alt="Location" />
            <div>
              <p className="text-sm ml-2">OUR OFFICE LOCATION</p>
              <p className="text-sm ml-2">
                108, Soi Pramote, Surawongse Road, Bangrak, Bangkok – 10500,
                Thailand
              </p>
            </div>
          </div>
          <div className="flex  ml-10 mt-8">
            <img className="w-[20px] h-[20px]" src={phone} alt="phone" />
            <div>
              <p className="text-sm ml-2">CONTACT NUMBER</p>
              <p className="text-sm ml-2">+66 62 949-2899</p>
            </div>
          </div>
          <div className="flex  ml-10 mt-8">
            <img className="w-[20px] h-[20px]" src={envelope} alt="Location" />
            <div>
              <p className="text-sm ml-2">EMAIL</p>
              <p className="text-sm ml-2">info@intelasolution.com</p>
            </div>
          </div>
        </div>
        <div className="sm:w-full md:w-1/3 lg:w-1/3 bg-[#082C6B] rounded-lg">
          <h2 className="mb-5 mt-10 text-xl font-bold ml-10">
            HOW WE CAN ASSIST YOU{" "}
          </h2>
          <div className="md:ml-10">
            <form>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full md:max-w-xs mb-3 bg-[#D9D9D933]"
              />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full md:max-w-xs mb-3 bg-[#D9D9D933]"
              />
              <input
                type="number"
                placeholder="Phone Number"
                className="input input-bordered w-full md:max-w-xs mb-3 bg-[#D9D9D933]"
              />
              <textarea className="input-bordered rounded-xl w-full md:max-w-xs p-10 mb-8 bg-[#D9D9D933]"></textarea>
              <div className="md:text-center">
                <button className="w-[160px] bg-yellow-500 md:mr-0 rounded-lg md:ml-28 mb-5 md:px-1 py-2">
                  submit your request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
