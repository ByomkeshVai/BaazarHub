import HeroSidebar from "./HeroSideBar/HeroSidebar";
import HeroSlider from "./HeroSlider/HeroSlider";
import HeroBanner from "./HeroBanner/HeroBanner";
import HeroCard from "./HeroCard/HeroCart";

const Hero = () => {
  return (
    <>
      <div className="flex flex-row lg:min-h-80 mt-1 md:p-2">
        <HeroSidebar />
        <HeroSlider />
      </div>
      <HeroBanner />
      <HeroCard />
    </>
  );
};

export default Hero;
