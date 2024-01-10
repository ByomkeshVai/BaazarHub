import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter } from "react-router-dom";
import Routers from "./router/Routers.tsx";
import "preline/preline";
import "primeicons/primeicons.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: true, pt: {} }}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </PrimeReactProvider>
  </React.StrictMode>
);
