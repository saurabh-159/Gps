import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `flex items-center px-4 py-3 rounded-xl transition-all duration-300 group ${
    isActive
      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30"
      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
  }`;

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gradient-to-b from-gray-900 to-gray-950 border-r border-gray-800 flex flex-col h-screen">
      {/* Fixed Header - Yeh scroll nahi hoga */}
      <div className="p-5 pt-6 flex-shrink-0">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
            <span className="text-xl">📍</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              GPS Nav
            </h2>
            <p className="text-xs text-gray-500">Navigation Suite</p>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-4"></div>
      </div>

      {/* Scrollable Navigation Section - Yeh scroll hoga lekin scrollbar dikhega nahi */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
        <nav className="space-y-2 p-5 pb-4">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 mb-3">
            Navigation
          </div>

          <NavLink to="/home" className={linkClass}>
            <div className="w-8 h-8 rounded-lg bg-blue-900/20 flex items-center justify-center mr-3">
              <span className="text-lg">🏠</span>
            </div>
            <span className="font-medium">Home</span>
          </NavLink>

          <NavLink to="/vehicles-map" className={linkClass}>
            <div className="w-8 h-8 rounded-lg bg-green-900/20 flex items-center justify-center mr-3">
              <span className="text-lg">🗺️</span>
            </div>
            <span className="font-medium">All Vehicles Map</span>
          </NavLink>

          <NavLink to="/vehicles-report" className={linkClass}>
            <div className="w-8 h-8 rounded-lg bg-purple-900/20 flex items-center justify-center mr-3">
              <span className="text-lg">📊</span>
            </div>
            <span className="font-medium">All Vehicles Report</span>
          </NavLink>

          <NavLink to="/downloaded-reports" className={linkClass}>
            <div className="w-8 h-8 rounded-lg bg-amber-900/20 flex items-center justify-center mr-3">
              <span className="text-lg">⬇️</span>
            </div>
            <span className="font-medium">Downloaded Reports</span>
          </NavLink>

          <NavLink to="/geofences" className={linkClass}>
            <div className="w-8 h-8 rounded-lg bg-red-900/20 flex items-center justify-center mr-3">
              <span className="text-lg">📍</span>
            </div>
            <span className="font-medium">Geofences</span>
          </NavLink>

          <NavLink to="/" className={linkClass}>
            <div className="w-8 h-8 rounded-lg bg-yellow-900/20 flex items-center justify-center mr-3">
              <span className="text-lg">🔔</span>
            </div>
            <span className="font-medium">Notifications On/Off</span>
          </NavLink>

          <NavLink to="/" className={linkClass}>
            <div className="w-8 h-8 rounded-lg bg-cyan-900/20 flex items-center justify-center mr-3">
              <span className="text-lg">📞</span>
            </div>
            <span className="font-medium">Contact Service Provider</span>
          </NavLink>

          <NavLink to="/rc-check" className={linkClass}>
            <div className="w-8 h-8 rounded-lg bg-blue-900/20 flex items-center justify-center mr-3">
              <span className="text-lg">🪪</span>
            </div>
            <span className="font-medium">RC Check</span>
          </NavLink>

          <NavLink to="/dl-check" className={linkClass}>
            <div className="w-8 h-8 rounded-lg bg-green-900/20 flex items-center justify-center mr-3">
              <span className="text-lg">🚗</span>
            </div>
            <span className="font-medium">DL Check</span>
          </NavLink>

          <NavLink to="/privacy-policy" className={linkClass}>
            <div className="w-8 h-8 rounded-lg bg-gray-800/50 flex items-center justify-center mr-3">
              <span className="text-lg">📜</span>
            </div>
            <span className="font-medium">Privacy Policy</span>
          </NavLink>

          <NavLink to="/terms" className={linkClass}>
            <div className="w-8 h-8 rounded-lg bg-gray-800/50 flex items-center justify-center mr-3">
              <span className="text-lg">📄</span>
            </div>
            <span className="font-medium">Terms & Conditions</span>
          </NavLink>

          <NavLink to="/settings" className={linkClass}>
            <div className="w-8 h-8 rounded-lg bg-gray-800/50 flex items-center justify-center mr-3">
              <span className="text-lg">⚙️</span>
            </div>
            <span className="font-medium">Settings</span>
          </NavLink>

          <NavLink to="" className={linkClass}>
            <div className="w-8 h-8 rounded-lg bg-red-900/20 flex items-center justify-center mr-3">
              <span className="text-lg">🗑️</span>
            </div>
            <span className="font-medium">Delete Account</span>
          </NavLink>

       
        </nav>
      </div>

      {/* Fixed Footer - Yeh bhi scroll nahi hoga */}
      <div className="p-5 pt-4 border-t border-gray-800 flex-shrink-0">
        <div className="flex items-center px-3 py-3 rounded-xl bg-gray-900/50">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">
            U
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">User Account</p>
            <p className="text-xs text-green-400 flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-400 mr-1 animate-pulse"></span>
              Online
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}