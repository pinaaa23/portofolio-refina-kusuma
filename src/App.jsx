import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectDetailDailyDrip from "./pages/ProjectDetailDailyDrip";
import ProjectDetailCashier from "./pages/ProjectDetailCashier";
import ProjectDetailParakelana from "./pages/ProjectDetailParakelana";
import ProjectDetailMonitoring from "./pages/ProjectDetailMonitoring";
import ProjectDetailKayuNusa from "./pages/ProjectDetailKayuNusa";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/refinakusuma" element={<PortfolioPage />} />
        <Route path="/project/uiux/dailydrip" element={<ProjectDetailDailyDrip />} />
        <Route path="/project/webdev/cashier" element={<ProjectDetailCashier />} />
        <Route path="/project/uiux/parakelana" element={<ProjectDetailParakelana />} />
        <Route path="/project/webdev/monitoring" element={<ProjectDetailMonitoring />} />
        <Route path="/project/uiux/kayunusa" element={<ProjectDetailKayuNusa />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
