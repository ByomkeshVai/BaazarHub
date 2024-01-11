import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { PiArrowUUpLeftBold } from "react-icons/pi";
import { IoIosPricetags } from "react-icons/io";
import { HiShieldCheck } from "react-icons/hi2";
import { BsFillCartCheckFill } from "react-icons/bs";

const HeroBanner = () => {
  return (
    <div>
      <ul className="flex items-center p-3 bg-red-100 md/lg:justify-between justify-center text-center ">
        <li className="lg:flex lg:items-center text-center">
          <AiTwotoneSafetyCertificate
            size={30}
            className="text-center mx-auto w-fit"
          />
          <h3 className="font-medium ml-2 mt-2 md/lg:mt-0">Safe Payment</h3>
        </li>
        <li className="md/lg:flex md/lg:items-center text-center">
          <TbTruckDelivery size={30} className="text-center w-fit mx-auto" />
          <h3 className="font-medium ml-2 mt-2 md/lg:mt-0">
            Nationwide Delivery
          </h3>
        </li>
        <li className="md/lg:flex md/lg:items-center border-r hidden">
          <PiArrowUUpLeftBold size={30} className="text-center w-fit mx-auto" />
          <h3 className="font-medium ml-2 mt-2 md/lg:mt-0">
            Free & 14 Days Easy Return
          </h3>
        </li>
        <li className="md/lg:flex md/lg:items-center border-r ">
          <IoIosPricetags size={30} className="text-center w-fit mx-auto" />
          <h3 className="font-medium ml-2 mt-2 md/lg:mt-0">
            Best Price Guaranteed
          </h3>
        </li>
        <li className="md/lg:flex md/lg:items-center border-r">
          <BsFillCartCheckFill size={30} className="text-left w-fit mx-auto" />
          <h3 className="font-medium ml-2 mt-2 md/lg:mt-0">
            Authentic Products
          </h3>
        </li>
        <li className="md/lg:flex md/lg:items-center border-r hidden">
          <HiShieldCheck size={30} className="text-center w-fit mx-auto" />
          <h3 className="font-medium ml-2 mt-2 md/lg:mt-0">Verified</h3>
        </li>
      </ul>
    </div>
  );
};

export default HeroBanner;
