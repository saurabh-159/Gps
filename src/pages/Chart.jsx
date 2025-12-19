import React from 'react';
import { 
  LineChart, Line, BarChart, Bar, 
  PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';

const Chart = () => {
  // Speed Data for Line Chart
  const speedData = [
    { time: '00:00', speed: 65 },
    { time: '03:00', speed: 70 },
    { time: '06:00', speed: 80 },
    { time: '09:00', speed: 75 },
    { time: '12:00', speed: 85 },
    { time: '15:00', speed: 90 },
    { time: '18:00', speed: 70 },
    { time: '21:00', speed: 65 },
  ];

  // Speed Distribution Data
  const speedDistributionData = [
    { range: '0-20 km/h', count: 12 },
    { range: '21-40 km/h', count: 18 },
    { range: '41-60 km/h', count: 45 },
    { range: '61-80 km/h', count: 65 },
    { range: '81-100 km/h', count: 32 },
    { range: '100+ km/h', count: 8 },
  ];

  // Category Data for Pie Chart
  const categoryData = [
    { name: 'Normal', value: 65, color: '#10B981' },
    { name: 'Moderate', value: 20, color: '#F59E0B' },
    { name: 'High', value: 10, color: '#EF4444' },
    { name: 'Idle', value: 5, color: '#6B7280' },
  ];

  // Stats Data
  const statsData = [
    { label: 'Max Speed', value: '95 km/h', change: '+5%' },
    { label: 'Avg Speed', value: '68 km/h', change: '+2%' },
    { label: 'Distance', value: '248 km', change: '+12%' },
    { label: 'Trip Time', value: '3h 45m', change: '-8%' },
  ];

  // Detailed Speed Analytics
  const detailedSpeedData = [
    { hour: '12 AM', speed: 45 },
    { hour: '2 AM', speed: 60 },
    { hour: '4 AM', speed: 75 },
    { hour: '6 AM', speed: 85 },
    { hour: '8 AM', speed: 90 },
    { hour: '10 AM', speed: 95 },
    { hour: '12 PM', speed: 88 },
    { hour: '2 PM', speed: 82 },
    { hour: '4 PM', speed: 78 },
    { hour: '6 PM', speed: 65 },
    { hour: '8 PM', speed: 55 },
    { hour: '10 PM', speed: 50 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            # Charts
          </h1>
          <p className="text-gray-400 mt-2">Real-time vehicle analytics and performance metrics</p>
        </div>

        {/* Today's Overview */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
              Today
            </h2>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-xl transition">
                Last 24h
              </button>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl transition">
                Live View
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsData.map((stat, index) => (
              <div key={index} className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 hover:border-blue-500/30 transition">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold mt-2">{stat.value}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${stat.change.startsWith('+') ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Main Speed Chart */}
          <div className="space-y-8">
            {/* Speed Chart - Line */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <span className="mr-2">📈</span>
                    Speed Over Time
                  </h3>
                  <p className="text-gray-400 text-sm">Real-time speed monitoring</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span className="text-sm">Current Speed</span>
                </div>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={speedData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                      dataKey="time" 
                      stroke="#9CA3AF"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="#9CA3AF"
                      label={{ value: 'km/h', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }}
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937',
                        border: '1px solid #374151',
                        borderRadius: '10px'
                      }}
                      labelStyle={{ color: '#D1D5DB' }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="speed" 
                      stroke="#3B82F6" 
                      strokeWidth={3}
                      dot={{ r: 4, fill: '#3B82F6' }}
                      activeDot={{ r: 6, fill: '#60A5FA' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Speed Distribution - Bar Chart */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="mr-2">📊</span>
                Speed Distribution
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={speedDistributionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                      dataKey="range" 
                      stroke="#9CA3AF"
                      fontSize={11}
                    />
                    <YAxis 
                      stroke="#9CA3AF"
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937',
                        border: '1px solid #374151',
                        borderRadius: '10px'
                      }}
                    />
                    <Bar 
                      dataKey="count" 
                      fill="url(#colorGradient)" 
                      radius={[6, 6, 0, 0]}
                    >
                      <defs>
                        <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#8B5CF6" />
                          <stop offset="100%" stopColor="#3B82F6" />
                        </linearGradient>
                      </defs>
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Right Column - Additional Charts */}
          <div className="space-y-8">
            {/* Category Distribution - Pie Chart */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="mr-2">🍰</span>
                Speed Categories
              </h3>
              <div className="flex flex-col lg:flex-row items-center">
                <div className="h-64 w-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937',
                          border: '1px solid #374151',
                          borderRadius: '10px'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-6 lg:mt-0 lg:ml-8">
                  <div className="space-y-4">
                    {categoryData.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div 
                          className="w-4 h-4 rounded mr-3" 
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="text-gray-300">{item.name}</span>
                        <span className="ml-auto font-bold">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Speed Analytics - Area Chart */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="mr-2">🌡️</span>
                Detailed Speed Analytics
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={detailedSpeedData}>
                    <defs>
                      <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                      dataKey="hour" 
                      stroke="#9CA3AF"
                      fontSize={11}
                    />
                    <YAxis 
                      stroke="#9CA3AF"
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937',
                        border: '1px solid #374151',
                        borderRadius: '10px'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="speed" 
                      stroke="#10B981" 
                      fillOpacity={1} 
                      fill="url(#areaGradient)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Speed Data Summary */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="mr-2">📋</span>
                Speed Data Summary
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900/40 p-4 rounded-xl">
                  <div className="text-gray-400 text-sm">Peak Speed Time</div>
                  <div className="text-lg font-bold">10:45 AM</div>
                </div>
                <div className="bg-gray-900/40 p-4 rounded-xl">
                  <div className="text-gray-400 text-sm">Lowest Speed Time</div>
                  <div className="text-lg font-bold">08:30 PM</div>
                </div>
                <div className="bg-gray-900/40 p-4 rounded-xl">
                  <div className="text-gray-400 text-sm">Speed Violations</div>
                  <div className="text-lg font-bold text-red-400">2 times</div>
                </div>
                <div className="bg-gray-900/40 p-4 rounded-xl">
                  <div className="text-gray-400 text-sm">Avg Trip Duration</div>
                  <div className="text-lg font-bold">42 min</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Controls */}
        <div className="mt-8 flex justify-between items-center">
          <div className="text-gray-400 text-sm">
            Last updated: Today at 14:30:45
          </div>
          <div className="flex space-x-4">
            <button className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 rounded-xl transition flex items-center">
              <span className="mr-2">⬇️</span>
              Export Data
            </button>
            <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-xl transition flex items-center">
              <span className="mr-2">🔄</span>
              Refresh Charts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;