import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import HomePage from "./containers/HomePage";
import SearchPage from "./containers/SearchPage";
import DetailPage from "./containers/DetailPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
