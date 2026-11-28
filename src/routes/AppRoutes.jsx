import { Navigate, Route, Routes } from "react-router";
import AboutUsPage from "../pages/AboutUsPage.jsx";
import AchievementsPage from "../pages/AchievementsPage.jsx";
import AwardsPage from "../pages/AwardsPage.jsx";
import CertificatesPage from "../pages/CertificatesPage.jsx";
import EquippedPage from "../pages/EquippedPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import QualityAssurancePage from "../pages/QualityAssurancePage.jsx";
import TechnologyPage from "../pages/TechnologyPage.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/equipped" element={<EquippedPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/achievements" element={<AchievementsPage />} />
      <Route path="/awards" element={<AwardsPage />} />
      <Route path="/certificates" element={<CertificatesPage />} />
      <Route path="/technology" element={<TechnologyPage />} />
      <Route path="/quality-assurance" element={<QualityAssurancePage />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}
