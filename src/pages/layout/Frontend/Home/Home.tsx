import Navbar from "../../../../components/Frontend/Navbar/Navbar";
import Hero from "../../../../components/Frontend/Hero/Hero";
import Category from "../../../../components/Frontend/Category/Category";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="max-w-screen-2xl mx-auto">
        <Hero />
        <Category />
      </div>
    </div>
  );
};

export default Home;
