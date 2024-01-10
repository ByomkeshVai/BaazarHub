import React from "react";
import SubMenu from "./SubMenu";

const Navbar = () => {
  return (
    <div>
      <SubMenu />
      <header className=" z-50 text-sm lg:py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700 rounded-md bg-red-500 ">
        <nav
          className=" py-3 shadow-md mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl "
          aria-label="Global"
        >
          <div className="flex lg:items-center justify-between lg:flex-nowrap flex-wrap w-full">
            <div className="flex items-center justify-between ">
              <div className="  sm:border-gray-300 dark:border-gray-700 lg:mr-5 ">
                <button
                  type="button"
                  className="w-10 h-10 flex justify-center items-center text-sm mr-3 lg:mr-0 font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
                  data-hs-overlay="#navbar-secondary-content"
                  aria-controls="navbar-secondary-content"
                  aria-label="Toggle navigation"
                >
                  <svg
                    className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4 "
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                  <svg
                    className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              <div className="logo-area">
                <a
                  className="flex-none text-xl font-semibold dark:text-white"
                  href="#"
                  aria-label="Brand"
                >
                  Brand
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center lg:mt-0 mt-5 lg:order-1 order-3 w-full">
              <div className="flex rounded-lg shadow-sm ">
                <input
                  type="text"
                  id="hs-trailing-button-add-on-with-icon"
                  name="hs-trailing-button-add-on-with-icon"
                  className="py-3  border-gray-200 outline-none lg:w-[45rem] w-[19rem] md:w-[45rem] px-5 lg:text-md shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Search For Products..."
                />
                <button
                  type="button"
                  className="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-red-400 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <svg
                    className="flex-shrink-0 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center lg:gap-8 gap-5 lg:order-3 order-1">
              <div className="">
                <span
                  className="pi pi-shopping-bag  border-2 p-2 rounded-full "
                  style={{ fontSize: "1rem" }}
                ></span>
              </div>
              <div>
                <span
                  className="pi pi-user  border-2 p-2 rounded-full"
                  style={{ fontSize: "1rem" }}
                ></span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
