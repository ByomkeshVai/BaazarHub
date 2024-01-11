import Navbar from "../../../../components/Frontend/Navbar/Navbar";
import Hero from "../../../../components/Frontend/Hero/Hero";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="max-w-screen-2xl mx-auto">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
