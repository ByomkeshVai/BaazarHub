import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "./router/Routers.tsx";
import "preline/preline";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store.ts";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </PersistGate>
      <Toaster />
    </Provider>
  </ThemeProvider>
);
