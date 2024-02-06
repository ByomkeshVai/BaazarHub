import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Preloader from "../components/Shared/Preloader/Preloader";
import Home from "../pages/layout/Frontend/Home/Home";

import VendorRegTab from "../components/Frontend/Auth/VendorAuth/VendorRegTab";

const Routers = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendor-registration" element={<VendorRegTab />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
