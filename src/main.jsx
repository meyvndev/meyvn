import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Layout from "./components/layout.jsx";
import Home from "./components/index.jsx";
import Service from "./components/service.jsx";
import Draft from "./components/draft.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="service" element={<Service />} />
        </Route>
        <Route path="draft" element={<Draft />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
