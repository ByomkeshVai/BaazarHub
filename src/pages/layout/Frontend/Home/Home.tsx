import Navbar from "../../../../components/Frontend/Navbar/Navbar";
import Hero from "../../../../components/Frontend/Hero/Hero";
import Category from "../../../../components/Frontend/Category/Category";
import FlashSale from "../../../../components/Frontend/FlashSale/FlashSale";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="mx-auto max-w-screen-2xl">
        <Hero />
        <Category />
        <FlashSale />
      </div>
    </div>
  );
};

export default Home;
