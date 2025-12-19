// Enhanced Navbar Component - common/Navbar.jsx
export default function Navbar() {
  return (
    <div className="h-16 bg-gradient-to-r from-gray-900 to-gray-950 border-b border-gray-800 flex items-center justify-between px-6 shadow-lg">
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            GPS Dashboard
          </h1>
          <div className="ml-3 px-2 py-1 bg-blue-900/30 rounded-lg border border-blue-800/30">
            <span className="text-xs text-blue-300 font-medium">PRO</span>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="hidden md:flex items-center ml-6">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search location or address..." 
              className="pl-10 pr-4 py-2 w-64 bg-gray-900/50 border border-gray-800 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-900"
            />
            <div className="absolute left-3 top-2.5">
              <span className="text-gray-500">🔍</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5">
        {/* Status Indicator */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-900/20 border border-green-800/30">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span className="text-sm text-green-300 font-medium">Live Tracking</span>
        </div>
        
        {/* Notification Bell */}
        <button className="relative p-2 rounded-lg hover:bg-gray-800 transition">
          <span className="text-xl">🔔</span>
          <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500"></div>
        </button>
        
        {/* User Profile */}
        <div className="flex items-center gap-3 pl-3 border-l border-gray-800">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-white">User Account</p>
            <p className="text-xs text-gray-400">Administrator</p>
          </div>
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg cursor-pointer hover:shadow-blue-500/30 transition">
              U
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-gray-900"></div>
          </div>
        </div>
      </div>
    </div>
  );
}