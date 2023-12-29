import background from "../../../assets/images/background-image.png";
import gradientOverlay from "../../../assets/images/baygrond.png";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <div
      className="relative bg-cover"
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
        <Hero />
      </div>
    </div>
  );
};

export default Home;
