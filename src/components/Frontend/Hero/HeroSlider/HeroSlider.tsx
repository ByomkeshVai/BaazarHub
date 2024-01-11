import { Carousel } from "flowbite-react";

const HeroSlider = () => {
  return (
    <div className=" md/lg:overflow-hidden lg:basis-3/5 max-w-full w-96 md/lg:h-auto h-36  mx-auto md:grow md:basis-3/5 md:pr-1">
      <Carousel slideInterval={5000}>
        <img
          className="object-cover max-w-full h-auto rounded-md"
          src="https://storage.googleapis.com/pickaboo-prod/media/dcastalia_hybridslider/image/Gadget_Overall_Big_Banner_1__1.jpg"
          alt="..."
        />
        <img
          className="object-cover max-w-full h-auto rounded-md"
          src="https://storage.googleapis.com/pickaboo-prod/media/dcastalia_hybridslider/image/Gadget_Overall_Big_Banner_1__1.jpg"
          alt="..."
        />
        <img
          className="object-cover  max-w-full h-auto rounded-md"
          src="https://storage.googleapis.com/pickaboo-prod/media/dcastalia_hybridslider/image/Gadget_Overall_Big_Banner_1__1.jpg"
          alt="..."
        />
        <img
          className="object-cover  max-w-full h-auto rounded-md"
          src="https://storage.googleapis.com/pickaboo-prod/media/dcastalia_hybridslider/image/Gadget_Overall_Big_Banner_1__1.jpg"
          alt="..."
        />
        <img
          className="object-cover max-w-full h-auto rounded-md"
          src="https://storage.googleapis.com/pickaboo-prod/media/dcastalia_hybridslider/image/Gadget_Overall_Big_Banner_1__1.jpg"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default HeroSlider;
