import React, { useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { useNavigate } from 'react-router-dom'


function Home() {
  // State for popup

  const navigate = useNavigate()
  const [selectedDevice, setSelectedDevice] = useState(null)
  const [showNavigation, setShowNavigation] = useState(false)

 


  // Pie Chart Data
  const pieData = [
    { name: 'Stopped', value: 1, color: '#ef4444' },
    { name: 'Running', value: 2, color: '#10b981' },
    { name: 'Idle', value: 4, color: '#6b7280' },
    { name: 'Expired', value: 3, color: '#f97316' },
    { name: 'No Data', value: 6, color: '#9ca3af' },
    { name: 'Exp. Soon', value: 8, color: '#f59e0b' },
    { name: 'Inactive', value: 1, color: '#8b5cf6' },
  ];

  const devices = [
    {
      id: 1,
      deviceId: "DL6CL3764",
      owner: "SOURABH DEVELOPER",
      location: "RJ SH 44, Nandagan, Uttar Pradesh 281405, India",
      lastUpdated: "18 Dec 25, 02:01 PM",
      status: "Stopped",
      statusColor: "bg-red-500",
      speed: "0 kmh",
      distance: "133 km",
      battery: "85%",
      signal: "Good",
      temperature: "18°C",
      totalTrips: 12,
      avgSpeed: "68 km/h",
      fuelEfficiency: "15 km/l",
      deviceAge: "2 years",
      warranty: "Valid until Dec 2025"
    },
  ];

  const stats = [
    { label: "Total Devices", value: 1, icon: "🚗", color: "from-blue-500 to-indigo-600", textColor: "text-blue-100" },
    { label: "Running", value: 0, icon: "▶️", color: "from-green-500 to-emerald-600", textColor: "text-green-100" },
    { label: "Stopped", value: 1, icon: "⏸️", color: "from-red-500 to-rose-600", textColor: "text-red-100" },
    { label: "Idle", value: 0, icon: "⏳", color: "from-gray-500 to-gray-600", textColor: "text-gray-100" },
    { label: "Expired", value: 0, icon: "⚠️", color: "from-orange-500 to-amber-600", textColor: "text-orange-100" },
    { label: "Exp. Soon", value: 0, icon: "🔔", color: "from-yellow-500 to-yellow-600", textColor: "text-yellow-100" },
  ];

  // Navigation destinations
  const navigationDestinations = [
    { id: 1, name: "Office HQ", address: "123 Business Park, Mumbai", distance: "45 km", eta: "1h 15m" },
    { id: 2, name: "Warehouse", address: "456 Industrial Area, Delhi", distance: "120 km", eta: "2h 30m" },
    { id: 3, name: "Client Site", address: "789 Corporate Tower, Bangalore", distance: "85 km", eta: "1h 50m" },
    { id: 4, name: "Service Center", address: "321 Service Road, Chennai", distance: "65 km", eta: "1h 30m" },
  ]

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900 border border-gray-800 p-3 rounded-lg shadow-xl">
          <p className="font-bold text-white">{payload[0].name}</p>
          <p className="text-gray-300">Devices: {payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  // Handle device card click
  const handleDeviceClick = (device) => {
    setSelectedDevice(device)
  }

  // Handle navigation click
  const handleNavigateClick = (device) => {
    setSelectedDevice(device)
    setShowNavigation(true)
  }

  // Close popup
  const closePopup = () => {
    setSelectedDevice(null)
    setShowNavigation(false)
  }

  // Start navigation to destination
  const startNavigation = (destination) => {
    alert(`Starting navigation to: ${destination.name}\nETA: ${destination.eta}`)
    setShowNavigation(false)
    setSelectedDevice(null)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">GPS Dashboard</h1>
          <p className="text-gray-400 mt-1">Real-time tracking and device management</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search devices..."
              className="pl-10 pr-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 w-64"
            />
            <div className="absolute left-3 top-3">
              <span className="text-gray-500">🔍</span>
            </div>
          </div>
          <button className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium shadow-lg shadow-blue-500/20">
            + Add Device
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`bg-gradient-to-br ${stat.color} rounded-2xl p-5 shadow-lg border border-gray-700/50 hover:scale-[1.02] transition-transform duration-300`}
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className={`text-sm ${stat.textColor} font-medium`}>{stat.label}</div>
              </div>
              <div className="text-2xl">{stat.icon}</div>
            </div>
            <div className="mt-4 h-1 w-full bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white/40 rounded-full"
                style={{ width: `${(stat.value / 10) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Pie Chart */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 shadow-xl h-full">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="mr-3">📊</span> Device Status Distribution
            </h2>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    label={(entry) => `${entry.name}: ${entry.value}`}
                    labelLine={false}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="#1f2937" strokeWidth={2} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36}
                    formatter={(value) => <span className="text-gray-300 text-sm">{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend Details */}
            <div className="mt-6 space-y-3">
              {pieData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-3" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-white font-medium">{item.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-white mr-2">{item.value}</span>
                    <span className="text-gray-400 text-sm">device{item.value !== 1 ? 's' : ''}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Device Details */}
        <div className="lg:col-span-2">
          <div className="   h-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white flex items-center">
                <span className="mr-3">🚗</span> Active Devices
              </h2>
              <div className="flex items-center space-x-3">
                <span className="text-gray-400">Sort by:</span>
                <select className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-white text-sm focus:outline-none focus:border-blue-500">
                  <option>Status</option>
                  <option>Last Updated</option>
                  <option>Distance</option>
                </select>
              </div>
            </div>

            {/* Device Card */}
            {devices.map((device) => (
              <div 
                key={device.id} 
                onClick={() => handleDeviceClick(device)}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 shadow-2xl mb-6 hover:border-gray-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                {/* Device Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                  <div className="flex items-start mb-4 md:mb-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-xl mr-4">
                      <span className="text-2xl">🚗</span>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-bold text-white mr-3">{device.deviceId}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${device.status === 'Stopped' ? 'bg-red-900/40 text-red-300 border border-red-800' : 'bg-green-900/40 text-green-300 border border-green-800'}`}>
                          ● {device.status}
                        </span>
                      </div>
                      <p className="text-gray-300 font-medium mb-1">{device.owner}</p>
                      <div className="flex items-center text-gray-400 text-sm mb-1">
                        <span className="mr-2">📍</span>
                        <span className="truncate max-w-md">{device.location}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <span className="mr-2">🕒</span>
                        <span>Last Updated: <span className="text-gray-300">{device.lastUpdated}</span></span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Battery & Signal */}
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white flex items-center">
                        <span className="mr-2">🔋</span>
                        {device.battery}
                      </div>
                      <div className="text-xs text-gray-400">Battery</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white flex items-center">
                        <span className="mr-2">📶</span>
                        {device.signal}
                      </div>
                      <div className="text-xs text-gray-400">Signal</div>
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700">
                    <div className="text-2xl font-bold text-white mb-1">{device.speed}</div>
                    <div className="text-gray-400 text-sm">Speed</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700">
                    <div className="text-2xl font-bold text-white mb-1">{device.distance}</div>
                    <div className="text-gray-400 text-sm">Distance</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700">
                    <div className="text-2xl font-bold text-white mb-1">{device.temperature}</div>
                    <div className="text-gray-400 text-sm">Temperature</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-3 pt-4 border-t border-gray-800" onClick={(e) => e.stopPropagation()}>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDeviceClick(device)
                    }}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition duration-300 font-medium flex items-center"
                  >
                    <span className="mr-2">👁️</span>
                    View Details
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      handleNavigateClick(device)
                    }}
                    className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-xl transition duration-300 font-medium flex items-center"
                  >
                    <span className="mr-2">📍</span>
                    Navigate
                  </button>
                  <button className="px-5 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-xl transition duration-300 font-medium flex items-center">
                    <span className="mr-2">⚙️</span>
                    Settings
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-2xl p-6 border border-blue-800/30">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">1</div>
              <div className="text-blue-200 font-medium">Active Devices</div>
            </div>
            <div className="text-4xl">📱</div>
          </div>
          <div className="mt-4 text-sm text-blue-300">All systems operational</div>
        </div>
        
        <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-2xl p-6 border border-green-800/30">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">133 km</div>
              <div className="text-green-200 font-medium">Total Distance</div>
            </div>
            <div className="text-4xl">📏</div>
          </div>
          <div className="mt-4 text-sm text-green-300">Tracked today</div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-2xl p-6 border border-purple-800/30">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-purple-200 font-medium">System Uptime</div>
            </div>
            <div className="text-4xl">⚡</div>
          </div>
          <div className="mt-4 text-sm text-purple-300">No issues reported</div>
        </div>
      </div>

      {/* Device Details Popup */}
   {selectedDevice && !showNavigation && (
  <div
    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
    onClick={closePopup}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative -translate-y-20 w-[340px] h-[420px] bg-[#0b1d33] rounded-3xl shadow-2xl flex flex-col items-center pt-10"
    >
      {/* Header */}
      <h2 className="text-teal-400 text-xl tracking-widest font-semibold">
        {selectedDevice.deviceId}
      </h2>
      <p className="text-teal-300 text-sm mb-4">
        {selectedDevice.owner}
      </p>

      <div className="w-32 h-[1px] bg-gray-500 mb-6" />

      {/* Center Circle */}
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Center Close */}
        <button
          onClick={closePopup}
          className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center text-white text-2xl"
        >
          ✕
        </button>

        {/* ICONS */}
        {/* Map */}
        <CircleBtn
          style="top-0 left-1/2 -translate-x-1/2 bg-white"
          icon="📍"
          onClick={() => navigate(`/vehicles-map`)}
        />

        {/* Share */}
        <CircleBtn
          style="left-0 top-1/2 -translate-y-1/2 bg-orange-500"
          icon="🔗"
          onClick={() => navigate(`/device/${selectedDevice.id}/share`)}
        />

        {/* Alert */}
        <CircleBtn
          style="right-0 top-1/2 -translate-y-1/2 bg-blue-500"
          icon="⚠️"
          onClick={() => navigate(`/vehicles-report`)}
        />

        {/* Call */}
        <CircleBtn
          style="bottom-6 left-4 bg-white"
          icon="📞"
          onClick={() => navigate(`/device/${selectedDevice.id}/call`)}
        />

        {/* Reports */}
        <CircleBtn
          style="bottom-6 right-4 bg-green-600"
          icon="📊"
          onClick={() => navigate(`/chart`)}
        />

        {/* Logs */}
        <CircleBtn
          style="bottom-0 left-1/2 -translate-x-1/2 bg-orange-500"
          icon="📋"
          onClick={() => navigate(`/detail`)}
        />
      </div>
    </div>
  </div>
)}


    
    </div>
  )
}

export default Home


const CircleBtn = ({ icon, onClick, style }) => {
  return (
    <button
      onClick={onClick}
      className={`absolute w-14 h-14 rounded-full flex items-center justify-center text-xl shadow-lg ${style}`}
    >
      {icon}
    </button>
  )
}
