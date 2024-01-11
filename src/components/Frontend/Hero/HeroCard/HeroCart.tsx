import React from "react";

const HeroCard = () => {
  return (
    <div className="flex justify-between mt-3 p-3 border border-3 bg-gray-100 shadow-lg rounded-lg flex-wrap gap-4 lg:gap-0">
      <div className="flex flex-col items-center gap-2 font-semibold">
        <img
          className="h-24 w-24"
          src="https://icms-image.slatic.net/images/ims-web/a0bb712a-2a3c-41b3-885f-3917a993662c.png"
          alt=""
        />
        <h3>Wholesale Price</h3>
      </div>
      <div className="flex flex-col items-center gap-2 font-semibold">
        <img
          className="h-24 w-24"
          src="https://icms-image.slatic.net/images/ims-web/af70e4a6-aca8-4827-9581-3b7a618b251f.png"
          alt=""
        />
        <h3>Price Under 299</h3>
      </div>
      <div className="flex flex-col items-center gap-2 font-semibold">
        <img
          className="h-24 w-24"
          src="https://icms-image.slatic.net/images/ims-web/0072753b-e061-432c-8bda-accf097e9fd6.png"
          alt=""
        />
        <h3>Free Delivery</h3>
      </div>
      <div className="flex flex-col items-center gap-2 font-semibold">
        <img
          className="h-24 w-24"
          src="https://icms-image.slatic.net/images/ims-web/a3e5ac91-bacc-4d70-8012-6584c06b83cc.png"
          alt=""
        />
        <h3>Fashion</h3>
      </div>
      <div className="flex flex-col items-center gap-2 font-semibold">
        <img
          className="h-24 w-24"
          src="https://icms-image.slatic.net/images/ims-web/71316378-079b-41b0-8f56-53d04cea6512.png"
          alt=""
        />
        <h3>Beauty & Glamour</h3>
      </div>
      <div className="flex flex-col items-center gap-2 font-semibold">
        <img
          className="h-24 w-24"
          src="https://icms-image.slatic.net/images/ims-web/42916e5a-5df4-42fc-a558-13087678203d.png"
          alt=""
        />
        <h3>Mart</h3>
      </div>
      <div className="flex flex-col items-center gap-2 font-semibold">
        <img
          className="h-24 w-24"
          src="https://icms-image.slatic.net/images/ims-web/aa5a30ec-a3ce-4d1f-ba01-25a0cb0740ee.png"
          alt=""
        />
        <h3>Home Makeover</h3>
      </div>
      <div className="flex flex-col items-center gap-2 font-semibold">
        <img
          className="h-24 w-24"
          src="https://icms-image.slatic.net/images/ims-web/6d48a9dc-6d7c-45d4-a0bb-41c9ab505ec2.png"
          alt=""
        />
        <h3>Best Price</h3>
      </div>
      <div className="flex flex-col items-center gap-2 font-semibold">
        <img
          className="h-24 w-24"
          src="https://icms-image.slatic.net/images/ims-web/59c4e282-71f1-4a5b-aa16-847cdea04f28.png"
          alt=""
        />
        <h3>Wallet</h3>
      </div>
    </div>
  );
};

export default HeroCard;
