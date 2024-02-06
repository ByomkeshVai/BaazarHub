import FormateTime from "../../../pages/ui/FormateTime";
import SectionHeader from "../../../pages/ui/SectionHeader";
import ViewMore from "../../../pages/ui/ViewMore";

import { EffectCoverflow, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade } from "react-awesome-reveal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faStar } from "@fortawesome/free-solid-svg-icons";

const FlashSale = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <SectionHeader title={"Just For You"} />
        <FormateTime />
        <ViewMore title="View More" />
      </div>
      <div className="max-w-full mx-auto ">
        <Fade damping={0.5} direction="right">
          <div className="py-5">
            <Swiper
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 5 },
                480: { slidesPerView: 2, spaceBetween: 5 },
                768: { slidesPerView: 5, spaceBetween: 5 },
                1024: { slidesPerView: 6, spaceBetween: 5 },
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              slidesPerView={6}
              spaceBetween={5}
              grabCursor={true}
              loop={true}
              pagination={true}
              modules={[Autoplay, EffectCoverflow]}
              className="mySwiper"
            >
              <SwiperSlide className="">
                <div className="p-5 mx-auto shadow-xl card lg:w-60 w-60 h-96 bg-base-100 hover:scale-110 text-slate-900">
                  <div className="flex items-start justify-between">
                    <p className="flex items-center gap-1 text-sm font-semibold">
                      <span className="text-green-600">Stock:</span>
                      <span className="font-bold text-red-600"> 50</span>
                    </p>
                    <p className="font-bold">
                      <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                        30% Off
                      </span>
                    </p>
                  </div>
                  <div className="">
                    <figure className="">
                      <img
                        src="https://static-01.daraz.com.bd/original/eff55b4dffd1f60f1ea060918824ffd8.jpg"
                        alt="images"
                        className="object-cover w-56 h-40 mx-auto mt-4 mb-4 rounded-xl"
                      />
                    </figure>
                    <div className="items-center text-center card-body">
                      <h2 className="text-xl font-bold">Demo Product</h2>
                      <div className="flex items-center justify-between mt-3">
                        <p className="flex items-center gap-2 text-md">
                          <span className="font-bold">Price:</span>{" "}
                          <span className="font-semibold">100 BDT</span>
                        </p>

                        <FontAwesomeIcon
                          className="text-2xl"
                          icon={faCartPlus}
                          style={{ color: "green" }}
                        />
                      </div>

                      <div className="flex items-center justify-between mt-5">
                        <button className="flex items-center gap-2 px-3 py-1 bg-red-600 border-2 rounded-xl btn btn-sm btn-error text-slate-50">
                          <p className="font-bold">Buy Now</p>
                        </button>
                        <button>
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="p-5 mx-auto shadow-xl card lg:w-60 w-60 h-96 bg-base-100 hover:scale-110 text-slate-900">
                  <div className="flex items-start justify-between">
                    <p className="flex items-center gap-1 text-sm font-semibold">
                      <span className="text-green-600">Stock:</span>
                      <span className="font-bold text-red-600"> 50</span>
                    </p>
                    <p className="font-bold">
                      <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                        30% Off
                      </span>
                    </p>
                  </div>
                  <div className="">
                    <figure className="">
                      <img
                        src="https://static-01.daraz.com.bd/original/eff55b4dffd1f60f1ea060918824ffd8.jpg"
                        alt="images"
                        className="object-cover w-56 h-40 mx-auto mt-4 mb-4 rounded-xl"
                      />
                    </figure>
                    <div className="items-center text-center card-body">
                      <h2 className="text-xl font-bold">Demo Product</h2>
                      <div className="flex items-center justify-between mt-3">
                        <p className="flex items-center gap-2 text-md">
                          <span className="font-bold">Price:</span>{" "}
                          <span className="font-semibold">100 BDT</span>
                        </p>

                        <FontAwesomeIcon
                          className="text-2xl"
                          icon={faCartPlus}
                          style={{ color: "green" }}
                        />
                      </div>

                      <div className="flex items-center justify-between mt-5">
                        <button className="flex items-center gap-2 px-3 py-1 bg-red-600 border-2 rounded-xl btn btn-sm btn-error text-slate-50">
                          <p className="font-bold">Buy Now</p>
                        </button>
                        <button>
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="p-5 mx-auto shadow-xl card lg:w-60 w-60 h-96 bg-base-100 hover:scale-110 text-slate-900">
                  <div className="flex items-start justify-between">
                    <p className="flex items-center gap-1 text-sm font-semibold">
                      <span className="text-green-600">Stock:</span>
                      <span className="font-bold text-red-600"> 50</span>
                    </p>
                    <p className="font-bold">
                      <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                        30% Off
                      </span>
                    </p>
                  </div>
                  <div className="">
                    <figure className="">
                      <img
                        src="https://static-01.daraz.com.bd/original/eff55b4dffd1f60f1ea060918824ffd8.jpg"
                        alt="images"
                        className="object-cover w-56 h-40 mx-auto mt-4 mb-4 rounded-xl"
                      />
                    </figure>
                    <div className="items-center text-center card-body">
                      <h2 className="text-xl font-bold">Demo Product</h2>
                      <div className="flex items-center justify-between mt-3">
                        <p className="flex items-center gap-2 text-md">
                          <span className="font-bold">Price:</span>{" "}
                          <span className="font-semibold">100 BDT</span>
                        </p>

                        <FontAwesomeIcon
                          className="text-2xl"
                          icon={faCartPlus}
                          style={{ color: "green" }}
                        />
                      </div>

                      <div className="flex items-center justify-between mt-5">
                        <button className="flex items-center gap-2 px-3 py-1 bg-red-600 border-2 rounded-xl btn btn-sm btn-error text-slate-50">
                          <p className="font-bold">Buy Now</p>
                        </button>
                        <button>
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="p-5 mx-auto shadow-xl card lg:w-60 w-60 h-96 bg-base-100 hover:scale-110 text-slate-900">
                  <div className="flex items-start justify-between">
                    <p className="flex items-center gap-1 text-sm font-semibold">
                      <span className="text-green-600">Stock:</span>
                      <span className="font-bold text-red-600"> 50</span>
                    </p>
                    <p className="font-bold">
                      <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                        30% Off
                      </span>
                    </p>
                  </div>
                  <div className="">
                    <figure className="">
                      <img
                        src="https://static-01.daraz.com.bd/original/eff55b4dffd1f60f1ea060918824ffd8.jpg"
                        alt="images"
                        className="object-cover w-56 h-40 mx-auto mt-4 mb-4 rounded-xl"
                      />
                    </figure>
                    <div className="items-center text-center card-body">
                      <h2 className="text-xl font-bold">Demo Product</h2>
                      <div className="flex items-center justify-between mt-3">
                        <p className="flex items-center gap-2 text-md">
                          <span className="font-bold">Price:</span>{" "}
                          <span className="font-semibold">100 BDT</span>
                        </p>

                        <FontAwesomeIcon
                          className="text-2xl"
                          icon={faCartPlus}
                          style={{ color: "green" }}
                        />
                      </div>

                      <div className="flex items-center justify-between mt-5">
                        <button className="flex items-center gap-2 px-3 py-1 bg-red-600 border-2 rounded-xl btn btn-sm btn-error text-slate-50">
                          <p className="font-bold">Buy Now</p>
                        </button>
                        <button>
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="p-5 mx-auto shadow-xl card lg:w-60 w-60 h-96 bg-base-100 hover:scale-110 text-slate-900">
                  <div className="flex items-start justify-between">
                    <p className="flex items-center gap-1 text-sm font-semibold">
                      <span className="text-green-600">Stock:</span>
                      <span className="font-bold text-red-600"> 50</span>
                    </p>
                    <p className="font-bold">
                      <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                        30% Off
                      </span>
                    </p>
                  </div>
                  <div className="">
                    <figure className="">
                      <img
                        src="https://static-01.daraz.com.bd/original/eff55b4dffd1f60f1ea060918824ffd8.jpg"
                        alt="images"
                        className="object-cover w-56 h-40 mx-auto mt-4 mb-4 rounded-xl"
                      />
                    </figure>
                    <div className="items-center text-center card-body">
                      <h2 className="text-xl font-bold">Demo Product</h2>
                      <div className="flex items-center justify-between mt-3">
                        <p className="flex items-center gap-2 text-md">
                          <span className="font-bold">Price:</span>{" "}
                          <span className="font-semibold">100 BDT</span>
                        </p>

                        <FontAwesomeIcon
                          className="text-2xl"
                          icon={faCartPlus}
                          style={{ color: "green" }}
                        />
                      </div>

                      <div className="flex items-center justify-between mt-5">
                        <button className="flex items-center gap-2 px-3 py-1 bg-red-600 border-2 rounded-xl btn btn-sm btn-error text-slate-50">
                          <p className="font-bold">Buy Now</p>
                        </button>
                        <button>
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div className="p-5 mx-auto shadow-xl card lg:w-60 w-60 h-96 bg-base-100 hover:scale-110 text-slate-900">
                  <div className="flex items-start justify-between">
                    <p className="flex items-center gap-1 text-sm font-semibold">
                      <span className="text-green-600">Stock:</span>
                      <span className="font-bold text-red-600"> 50</span>
                    </p>
                    <p className="font-bold">
                      <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                        30% Off
                      </span>
                    </p>
                  </div>
                  <div className="">
                    <figure className="">
                      <img
                        src="https://static-01.daraz.com.bd/original/eff55b4dffd1f60f1ea060918824ffd8.jpg"
                        alt="images"
                        className="object-cover w-56 h-40 mx-auto mt-4 mb-4 rounded-xl"
                      />
                    </figure>
                    <div className="items-center text-center card-body">
                      <h2 className="text-xl font-bold">Demo Product</h2>
                      <div className="flex items-center justify-between mt-3">
                        <p className="flex items-center gap-2 text-md">
                          <span className="font-bold">Price:</span>{" "}
                          <span className="font-semibold">100 BDT</span>
                        </p>

                        <FontAwesomeIcon
                          className="text-2xl"
                          icon={faCartPlus}
                          style={{ color: "green" }}
                        />
                      </div>

                      <div className="flex items-center justify-between mt-5">
                        <button className="flex items-center gap-2 px-3 py-1 bg-red-600 border-2 rounded-xl btn btn-sm btn-error text-slate-50">
                          <p className="font-bold">Buy Now</p>
                        </button>
                        <button>
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default FlashSale;
