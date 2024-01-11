import React from "react";
import HeroSidebar from "./HeroSideBar/HeroSidebar";
import HeroSlider from "./HeroSlider/HeroSlider";
import HeroPromotion from "./HeroPromotion/HeroPromotion";
import HeroBanner from "./HeroBanner/HeroBanner";

const Hero = () => {
  return (
    <>
      <div className="flex flex-row lg:min-h-80 mt-1 md:p-2">
        <HeroSidebar />
        <HeroSlider />
      </div>
      <HeroBanner />
    </>
  );
};

export default Hero;
