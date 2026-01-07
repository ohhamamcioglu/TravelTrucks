import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";


const Home = lazy(() => import("./pages/Home.jsx"));
const Header = lazy(() => import("./components/Header.jsx"));
const Catalog = lazy(() => import("./pages/Catalog.jsx"));



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
