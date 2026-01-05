import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";

const Home =lazy(()=> import("./pages/Home.jsx"));
const Header = lazy(()=> import("./components/Header.jsx"));
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={ <div>Catalog Sayfasi</div> }/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
