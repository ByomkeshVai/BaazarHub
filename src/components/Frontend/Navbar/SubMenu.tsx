import React from "react";

const SubMenu = () => {
  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-2 sm:py-0 dark:bg-gray-800 dark:border-gray-700 rounded-md ">
        <nav
          className="relative flex flex-wrap basis-full w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 items-center max-w-screen-2xl "
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <div className="  sm:border-gray-300 dark:border-gray-700 mr-5 ">
              <div className="flex flex-col gap-y-4 gap-x-0  sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
                <a
                  className="font-medium text-blue-600  sm:px-0 dark:text-blue-500 lg:flex"
                  href="#"
                  aria-current="page"
                >
                  Become A Seller
                </a>
                <a
                  className="font-medium text-blue-600 px-6 sm:px-0 dark:text-blue-500 lg:flex hidden"
                  href="#"
                  aria-current="page"
                >
                  Help & Support
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center ms-auto sm:ms-0 sm:order-3 lg:hidden">
            <div className="sm:hidden">
              <button
                type="button"
                className="p-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-overlay="#navbar-offcanvas-example"
                aria-controls="navbar-offcanvas-example"
                aria-label="Toggle navigation"
              >
                Menu
                <svg
                  className="hs-overlay-open:hidden w-4 h-4"
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
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="navbar-offcanvas-example"
            className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-white border-e basis-full grow sm:order-2 sm:static sm:block sm:h-auto sm:max-w-none sm:w-auto sm:border-r-transparent sm:transition-none sm:translate-x-0 sm:z-40 sm:basis-auto dark:bg-gray-800 dark:border-r-gray-700 sm:dark:border-r-transparent hidden"
            tabindex="-1"
            data-hs-overlay-close-on-resize
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
              <a
                className="font-medium text-blue-600 px-6 sm:py-6 sm:px-0 dark:text-blue-500"
                href="#"
                aria-current="page"
              >
                Landing
              </a>
              <a
                className="font-medium text-blue-600 px-6 sm:py-6 sm:px-0 dark:text-blue-500"
                href="#"
                aria-current="page"
              >
                Landing
              </a>
              <a
                className="font-medium text-blue-600 px-6 sm:py-6 sm:px-0 dark:text-blue-500"
                href="#"
                aria-current="page"
              >
                Landing
              </a>
              <a
                className="font-medium text-blue-600 px-6 sm:py-6 sm:px-0 dark:text-blue-500"
                href="#"
                aria-current="page"
              >
                Landing
              </a>
              <a
                className="font-medium text-blue-600 px-6 sm:py-6 sm:px-0 dark:text-blue-500 lg:hidden"
                href="#"
                aria-current="page"
              >
                Become A Seller
              </a>
              <a
                className="font-medium text-blue-600 px-6 sm:py-6 sm:px-0 dark:text-blue-500 lg:hidden"
                href="#"
                aria-current="page"
              >
                Help & Support
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default SubMenu;
