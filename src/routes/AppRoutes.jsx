import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";

import Home from "../pages/Home";
import VehiclesMap from "../pages/VehiclesMap";
import VehiclesReport from "../pages/VehiclesReport";
import DownloadedReports from "../pages/DownloadedReports";
import Geofences from "../pages/Geofences";
 
 
import RCCheck from "../pages/RCCheck";
import DLCheck from "../pages/DLCheck";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Terms from "../pages/Terms";
import Settings from "../pages/Settings";
 
import Details from "../pages/Details";
import Chart from "../pages/Chart";
 
 

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" element={<Home />} />
        <Route path="/vehicles-map" element={<VehiclesMap />} />
        <Route path="/vehicles-report" element={<VehiclesReport />} />
        <Route path="/downloaded-reports" element={<DownloadedReports />} />
        <Route path="/geofences" element={<Geofences />} />
 
        <Route path="/rc-check" element={<RCCheck />} />
        <Route path="/dl-check" element={<DLCheck />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/chart" element={<Chart/>} />
        <Route path="/detail" element={<Details/>} />
      </Route>
    </Routes>
  );
}
