import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectDetailUIUX from "./pages/ProjectDetailUIUX";
import ProjectDetailWebDev from "./pages/ProjectDetailWebDev";
import ProjectDetailParakelana from "./pages/ProjectDetailParakelana";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/project/uiux/dailydrip" element={<ProjectDetailUIUX />} />
        <Route path="/project/webdev/cashier" element={<ProjectDetailWebDev />} />
        <Route path="/project/uiux/parakelana" element={<ProjectDetailParakelana />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
