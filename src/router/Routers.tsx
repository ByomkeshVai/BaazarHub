import React, { Suspense } from "react";
import { Routes } from "react-router-dom";
import Preloader from "../components/Shared/Preloader/Preloader";

const Routers = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Routes></Routes>
    </Suspense>
  );
};

export default Routers;
