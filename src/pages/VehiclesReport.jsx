import React, { useState } from 'react'
import { Download, Mail, Eye, Calendar, Filter, Printer, ChevronDown } from 'lucide-react'

function VehiclesReport() {
  const [selectedDevices, setSelectedDevices] = useState(['All Devices'])
  const [reportType, setReportType] = useState('summary')
  const [timeRange, setTimeRange] = useState('today')
  const [dateRange, setDateRange] = useState({
    start: '2024-12-18',
    end: '2024-12-18'
  })

  const devices = [
    { id: 1, name: 'DL6CL3764 - SOURABH DEVELOPER' },
    { id: 2, name: 'MH12AB1234 - JOHN DOE' },
    { id: 3, name: 'KA01CD5678 - JANE SMITH' },
    { id: 4, name: 'TN09EF9012 - ROBERT JOHNSON' },
    { id: 5, name: 'GJ05GH3456 - SARAH WILLIAMS' },
  ]

  const reportTypes = [
    { id: 'summary', name: 'Summary Report', icon: '📊' },
    { id: 'detailed', name: 'Detailed Report', icon: '📋' },
    { id: 'trip', name: 'Trip Report', icon: '📍' },
    { id: 'mileage', name: 'Mileage Report', icon: '📏' },
    { id: 'speed', name: 'Speed Report', icon: '⚡' },
    { id: 'idle', name: 'Idle Time Report', icon: '⏳' },
  ]

  const timeRanges = [
    { id: 'today', name: 'Today', icon: '🕘' },
    { id: 'yesterday', name: 'Yesterday', icon: '📅' },
    { id: 'week', name: 'This Week', icon: '📆' },
    { id: 'month', name: 'This Month', icon: '🗓️' },
    { id: 'custom', name: 'Custom Range', icon: '📅' },
  ]

  const handleDeviceSelect = (device) => {
    if (device === 'All Devices') {
      setSelectedDevices(['All Devices'])
    } else {
      const newSelection = selectedDevices.includes('All Devices') 
        ? [device] 
        : selectedDevices.includes(device)
          ? selectedDevices.filter(d => d !== device)
          : [...selectedDevices, device]
      setSelectedDevices(newSelection)
    }
  }

  const sampleReportData = [
    { device: 'DL6CL3764', distance: '133 km', duration: '4h 30m', avgSpeed: '68 km/h', stops: 3, idleTime: '45m' },
    { device: 'MH12AB1234', distance: '89 km', duration: '2h 15m', avgSpeed: '72 km/h', stops: 2, idleTime: '30m' },
    { device: 'KA01CD5678', distance: '245 km', duration: '6h 20m', avgSpeed: '65 km/h', stops: 5, idleTime: '1h 10m' },
    { device: 'TN09EF9012', distance: '56 km', duration: '1h 45m', avgSpeed: '75 km/h', stops: 1, idleTime: '15m' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">📊 Reports</h1>
          <p className="text-gray-400">Generate and manage vehicle tracking reports</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition duration-300 font-medium flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
          <button className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition duration-300 font-medium flex items-center">
            <Printer className="w-4 h-4 mr-2" />
            Print
          </button>
        </div>
      </div>

      {/* Report Configuration Card */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800/50 rounded-2xl p-6 border border-gray-800 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Report Type Selection */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <span className="mr-2">📋</span> Report Type
            </h3>
            <div className="space-y-2">
              {reportTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setReportType(type.id)}
                  className={`w-full p-3 rounded-xl text-left transition duration-300 flex items-center ${
                    reportType === type.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  <span className="text-xl mr-3">{type.icon}</span>
                  <span className="font-medium">{type.name}</span>
                  {reportType === type.id && (
                    <span className="ml-auto">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Device Selection */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <span className="mr-2">🚗</span> Devices
            </h3>
            
            {/* Device Selection Box */}
            <div className="relative mb-6">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 min-h-[140px]">
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedDevices.map((device, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg bg-blue-900/40 text-blue-200 text-sm font-medium"
                    >
                      {device}
                      <button 
                        onClick={() => handleDeviceSelect(device)}
                        className="ml-2 text-blue-300 hover:text-white"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                
                <div className="relative">
                  <select 
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                    onChange={(e) => handleDeviceSelect(e.target.value)}
                    value=""
                  >
                    <option value="" disabled>Choose devices ▼</option>
                    <option value="All Devices">All Devices</option>
                    {devices.map(device => (
                      <option key={device.id} value={device.name}>{device.name}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Time Range Selection */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Time Range
              </h3>
              
              {/* Quick Range Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                {timeRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setTimeRange(range.id)}
                    className={`px-4 py-2.5 rounded-xl transition duration-300 flex items-center ${
                      timeRange === range.id
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                    }`}
                  >
                    <span className="mr-2">{range.icon}</span>
                    {range.name}
                  </button>
                ))}
              </div>

              {/* Custom Date Range */}
              {timeRange === 'custom' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-900/30 rounded-xl border border-gray-800">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">From Date</label>
                    <input
                      type="date"
                      value={dateRange.start}
                      onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">To Date</label>
                    <input
                      type="date"
                      value={dateRange.end}
                      onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="flex-1 max-w-xs mx-auto px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition duration-300 font-bold text-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Eye className="w-5 h-5 mr-3" />
            VIEW REPORT
          </button>
          
          <button className="flex-1 max-w-xs mx-auto px-6 py-3.5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition duration-300 font-bold text-lg flex items-center justify-center shadow-lg shadow-green-500/20">
            <Download className="w-5 h-5 mr-3" />
            DOWNLOAD PDF
          </button>
          
          <button className="flex-1 max-w-xs mx-auto px-6 py-3.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition duration-300 font-bold text-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
            <Mail className="w-5 h-5 mr-3" />
            EMAIL REPORT
          </button>
        </div>
      </div>

      {/* Report Preview */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800/50 rounded-2xl p-6 border border-gray-800 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">Report Preview</h3>
          <div className="text-sm text-gray-400">
            Generated: Today, 02:30 PM
          </div>
        </div>

        {/* Report Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700">
            <div className="text-2xl font-bold text-white mb-1">4</div>
            <div className="text-gray-400 text-sm">Total Devices</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700">
            <div className="text-2xl font-bold text-white mb-1">523 km</div>
            <div className="text-gray-400 text-sm">Total Distance</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700">
            <div className="text-2xl font-bold text-white mb-1">14h 30m</div>
            <div className="text-gray-400 text-sm">Total Duration</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 text-center border border-gray-700">
            <div className="text-2xl font-bold text-white mb-1">70 km/h</div>
            <div className="text-gray-400 text-sm">Avg Speed</div>
          </div>
        </div>

        {/* Report Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-800">
          <table className="min-w-full divide-y divide-gray-800">
            <thead className="bg-gray-900/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Device</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Distance</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Avg Speed</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Stops</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Idle Time</th>
              </tr>
            </thead>
            <tbody className="bg-gray-900/30 divide-y divide-gray-800">
              {sampleReportData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-800/50 transition">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-blue-900/30 flex items-center justify-center mr-3">
                        <span className="text-sm">🚗</span>
                      </div>
                      <div className="font-medium text-white">{row.device}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-white font-medium">{row.distance}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-white font-medium">{row.duration}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-white font-medium">{row.avgSpeed}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 rounded-full bg-blue-900/30 text-blue-300 text-sm font-medium">
                      {row.stops} stops
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-white font-medium">{row.idleTime}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Report Footer */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center p-4 bg-gray-900/30 rounded-xl border border-gray-800">
          <div className="text-sm text-gray-400 mb-2 md:mb-0">
            Report ID: <span className="text-white font-mono">REP-20241218-001</span>
          </div>
          <div className="flex space-x-4">
            <button className="text-sm text-blue-400 hover:text-blue-300 transition">
              Export as CSV
            </button>
            <button className="text-sm text-green-400 hover:text-green-300 transition">
              Export as Excel
            </button>
            <button className="text-sm text-purple-400 hover:text-purple-300 transition">
              Schedule Report
            </button>
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800/50 rounded-2xl p-6 border border-gray-800 shadow-xl">
        <h3 className="text-xl font-bold text-white mb-6">📁 Recent Reports</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-gray-800/30 border border-gray-700 hover:border-blue-500/50 transition cursor-pointer">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center mr-3">
                <span className="text-lg">📊</span>
              </div>
              <div>
                <div className="font-bold text-white">Daily Summary</div>
                <div className="text-sm text-gray-400">18 Dec 2024</div>
              </div>
            </div>
            <div className="text-sm text-gray-300">4 devices, 523 km total</div>
          </div>
          
          <div className="p-4 rounded-xl bg-gray-800/30 border border-gray-700 hover:border-green-500/50 transition cursor-pointer">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-lg bg-green-900/30 flex items-center justify-center mr-3">
                <span className="text-lg">📍</span>
              </div>
              <div>
                <div className="font-bold text-white">Trip Analysis</div>
                <div className="text-sm text-gray-400">17 Dec 2024</div>
              </div>
            </div>
            <div className="text-sm text-gray-300">Detailed trip logs</div>
          </div>
          
          <div className="p-4 rounded-xl bg-gray-800/30 border border-gray-700 hover:border-purple-500/50 transition cursor-pointer">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-lg bg-purple-900/30 flex items-center justify-center mr-3">
                <span className="text-lg">📏</span>
              </div>
              <div>
                <div className="font-bold text-white">Mileage Report</div>
                <div className="text-sm text-gray-400">16 Dec 2024</div>
              </div>
            </div>
            <div className="text-sm text-gray-300">Fuel efficiency analysis</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VehiclesReport