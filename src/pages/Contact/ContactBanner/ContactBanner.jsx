import contactBanner from "../../../assets/contact/contactImg.png";

const ContactBanner = () => {
  return (
    <div className="relative bg-[#14150C] z-30 mx-4 md:mx-5 lg:mx-10 border-none rounded-2xl">
      <h1 className="text-2xl text-left font-bold">Contact Us</h1>
      <div className="md:w-full mx-0 md:mx-0">
        <img
          src={contactBanner}
          alt="banner-image"
          className="w-full h-full object-fill opacity-40"
        />
      </div>
    </div>
  );
};

export default ContactBanner;
