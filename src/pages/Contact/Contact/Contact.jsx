import { Helmet } from "react-helmet-async";
import ContactBanner from "../ContactBanner/ContactBanner";
import background from "../../../assets/solution/background-img.png";
import gradientOverlay from "../../../assets/images/baygrond.png";
import ContactForm from "../ContactForm/ContactForm";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Intela ~ Contact</title>
      </Helmet>
      <div
        className="relative bg-cover h-screen"
        style={{
          backgroundImage: `url(${background})`,
          height: "100vh",
        }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backgroundImage: `url(${gradientOverlay})`,
            opacity: 0.97,
          }}
        >
          <div className="text-white text-center">
            <ContactBanner />
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
