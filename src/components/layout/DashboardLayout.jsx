// Enhanced Dashboard Layout - DashboardLayout.jsx
import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-950 to-black text-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-indigo-500 to-transparent rounded-full blur-3xl"></div>
          </div>
          
          {/* Content Container */}
          <div className="relative">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm rounded-2xl p-5 border border-gray-800/50 shadow-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-400 text-sm">Total Distance</p>
                    <p className="text-2xl font-bold mt-1">1,247 <span className="text-lg">km</span></p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-blue-900/30 flex items-center justify-center">
                    <span className="text-2xl">📏</span>
                  </div>
                </div>
                <div className="mt-4 text-xs text-green-400">
                  <span>↑ 12% from last month</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm rounded-2xl p-5 border border-gray-800/50 shadow-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-400 text-sm">Active Trips</p>
                    <p className="text-2xl font-bold mt-1">3</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-green-900/30 flex items-center justify-center">
                    <span className="text-2xl">🚗</span>
                  </div>
                </div>
                <div className="mt-4 text-xs text-blue-400">
                  <span>2 in your area</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm rounded-2xl p-5 border border-gray-800/50 shadow-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-400 text-sm">Avg. Speed</p>
                    <p className="text-2xl font-bold mt-1">68 <span className="text-lg">km/h</span></p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-amber-900/30 flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                </div>
                <div className="mt-4 text-xs text-amber-400">
                  <span>Within speed limits</span>
                </div>
              </div>
            </div>

            {/* Page Content */}
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 shadow-xl">
              <Outlet />
            </div>
            
            {/* Footer Note */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                GPS Navigation System v2.1 • Last updated: Today 14:30
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}