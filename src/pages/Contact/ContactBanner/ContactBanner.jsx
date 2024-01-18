import contactBanner from "../../../assets/contact/contactImg.png";

const ContactBanner = () => {
  return (
    <div className="relative z-30 ml-20 md:mt-24 pb-12 lg:ml-28 border-none rounded-2xl">
      <h1
        className="text-left md:py-5 ml-12"
        style={{ fontFamily: "Antic", fontWeight: 400, fontSize: "48px" }}
      >
        contact us
      </h1>
      <div className="ml-10">
        <div className="md:w-full">
          <img
            src={contactBanner}
            alt="banner-image"
            className="max-w-full md:w-8/12 h-full object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
