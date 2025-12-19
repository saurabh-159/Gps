import React, { useState } from 'react';
import { MapPin, Navigation, Battery, Wifi, Clock, Play, Pause, MoreVertical, Car, Users, AlertCircle } from 'lucide-react';

export default function VehiclesMap() {
  const [selectedVehicle, setSelectedVehicle] = useState(1);
  
  // Sample vehicle data from image
  const vehicles = [
    {
      id: 1,
      deviceId: "DL6CL3764",
      owner: "SOURABH",
      status: "Stopped",
      location: "M92C+R3, Barsana, Uttar Pradesh 281405",
      detailedLocation: "Shri Kishon, Barsana",
      driver: "Nikunj",
      driverType: "A-Guest Driver",
      battery: "85%",
      signal: "Excellent",
      lastPing: "18 Dec 25, 05:21 PM",
      stoppedSince: "about an hour, 4 minutes",
      speed: "0 km/h",
      category: "Car",
      temperature: "28°C",
      passengers: 3,
      coordinates: { lat: 27.6509, lng: 77.3744 }
    },
    {
      id: 2,
      deviceId: "HR26BR7890",
      owner: "VIKASH",
      status: "Moving",
      location: "Shree Ji Unchagoon Marg, Barsana",
      detailedLocation: "Pili Pokhar (Pr Kund), Barsana",
      driver: "Local Driver",
      driverType: "Regular Driver",
      battery: "92%",
      signal: "Good",
      lastPing: "18 Dec 25, 05:15 PM",
      stoppedSince: "",
      speed: "45 km/h",
      category: "SUV",
      temperature: "26°C",
      passengers: 4,
      coordinates: { lat: 27.6515, lng: 77.3750 }
    },
    {
      id: 3,
      deviceId: "UP14AB1234",
      owner: "RAJESH",
      status: "Stopped",
      location: "Shri Radha Rani Temple, Barsana",
      detailedLocation: "Radha Rani Temple, Barsana",
      driver: "Guest Driver",
      driverType: "Temporary Driver",
      battery: "45%",
      signal: "Average",
      lastPing: "18 Dec 25, 05:10 PM",
      stoppedSince: "2 hours, 30 minutes",
      speed: "0 km/h",
      category: "Van",
      temperature: "30°C",
      passengers: 8,
      coordinates: { lat: 27.6520, lng: 77.3760 }
    }
  ];

  const selectedVehicleData = vehicles.find(v => v.id === selectedVehicle);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">
            All Vehicles Map
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Vehicle List */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-4 h-full">
              <h2 className="text-xl font-bold mb-4">Vehicles ({vehicles.length})</h2>
              
              {/* Vehicle Cards */}
              <div className="space-y-4">
                {vehicles.map((vehicle) => (
                  <div 
                    key={vehicle.id}
                    className={`bg-gray-900/40 border rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                      selectedVehicle === vehicle.id 
                        ? 'border-blue-500 ring-2 ring-blue-500/20' 
                        : 'border-gray-700 hover:border-gray-600'
                    }`}
                    onClick={() => setSelectedVehicle(vehicle.id)}
                  >
                    {/* Vehicle Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full mr-2 ${
                            vehicle.status === 'Moving' ? 'bg-green-500' : 'bg-red-500'
                          }`}></div>
                          <h3 className="text-lg font-bold">{vehicle.deviceId}</h3>
                        </div>
                        <p className="text-gray-400 text-sm mt-1">{vehicle.owner}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          vehicle.status === 'Moving' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {vehicle.status}
                        </span>
                        <button className="text-gray-400 hover:text-white">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="mb-3">
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <div>
                          <p className="text-gray-300 text-sm line-clamp-1">{vehicle.detailedLocation}</p>
                          <p className="text-gray-500 text-xs mt-1 line-clamp-1">{vehicle.location}</p>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="flex items-center">
                        <Battery className="w-3 h-3 text-green-400 mr-1" />
                        <span>{vehicle.battery}</span>
                      </div>
                      <div className="flex items-center">
                        <Wifi className="w-3 h-3 text-blue-400 mr-1" />
                        <span>{vehicle.signal}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 text-purple-400 mr-1" />
                        <span>{vehicle.speed}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Summary */}
              <div className="mt-6 pt-4 border-t border-gray-800">
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">2</div>
                    <div className="text-xs text-gray-400">Active</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-red-400">1</div>
                    <div className="text-xs text-gray-400">Stopped</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">3</div>
                    <div className="text-xs text-gray-400">Total</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map & Details */}
          <div className="lg:col-span-2">
            {/* Map Container */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden mb-6">
              <div className="relative h-[400px] bg-gradient-to-br from-gray-900 to-gray-800">
                {/* Google Map-like interface */}
                <div className="absolute inset-0">
                  {/* Map Background with Grid */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-gray-800 to-green-900/10">
                    {/* Grid Lines */}
                    <div className="absolute inset-0 opacity-10">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="absolute w-full h-px bg-white" style={{ top: `${i * 10}%` }}></div>
                      ))}
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="absolute h-full w-px bg-white" style={{ left: `${i * 10}%` }}></div>
                      ))}
                    </div>

                    {/* Roads */}
                    <div className="absolute w-1/2 h-2 bg-gray-600/30 rounded-full top-1/3 left-1/4 transform -translate-y-1/2"></div>
                    <div className="absolute h-1/2 w-2 bg-gray-600/30 rounded-full left-1/2 top-1/4 transform -translate-x-1/2"></div>

                    {/* Vehicle Markers */}
                    {vehicles.map((vehicle) => (
                      <div 
                        key={vehicle.id}
                        className={`absolute w-8 h-8 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                          selectedVehicle === vehicle.id ? 'scale-125 z-10' : ''
                        }`}
                        style={{
                          left: `${30 + vehicle.id * 15}%`,
                          top: `${40 + vehicle.id * 10}%`,
                        }}
                        onClick={() => setSelectedVehicle(vehicle.id)}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shadow-lg ${
                          vehicle.status === 'Moving' 
                            ? 'bg-green-500 ring-2 ring-green-400' 
                            : 'bg-red-500 ring-2 ring-red-400'
                        }`}>
                          <Car className="w-3 h-3 text-white" />
                        </div>
                        {selectedVehicle === vehicle.id && (
                          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black/90 px-2 py-1 rounded-lg text-xs font-bold">
                            {vehicle.deviceId}
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Location Labels */}
                    <div className="absolute top-1/4 left-1/4 bg-blue-900/30 px-3 py-1 rounded-full text-xs">
                      Barsana
                    </div>
                    <div className="absolute top-1/3 right-1/4 bg-purple-900/30 px-3 py-1 rounded-full text-xs">
                      Temple Area
                    </div>
                  </div>

                  {/* Map Controls */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <button className="bg-gray-900/80 hover:bg-gray-800 p-3 rounded-xl">
                      <Navigation className="w-5 h-5" />
                    </button>
                    <button className="bg-gray-900/80 hover:bg-gray-800 p-3 rounded-xl">
                      <span className="text-lg">+</span>
                    </button>
                    <button className="bg-gray-900/80 hover:bg-gray-800 p-3 rounded-xl">
                      <span className="text-lg">-</span>
                    </button>
                  </div>

                  {/* Google Logo */}
                  <div className="absolute bottom-4 right-4 flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
                    <span className="font-bold text-blue-400">G</span>
                    <span className="font-bold text-red-400">o</span>
                    <span className="font-bold text-yellow-400">o</span>
                    <span className="font-bold text-blue-400">g</span>
                    <span className="font-bold text-green-400">l</span>
                    <span className="font-bold text-red-400">e</span>
                    <span className="text-gray-300 ml-2 text-sm">Maps</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Selected Vehicle Details */}
            {selectedVehicleData && (
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-3 ${
                        selectedVehicleData.status === 'Moving' ? 'bg-green-500' : 'bg-red-500'
                      }`}></div>
                      <h2 className="text-2xl font-bold">{selectedVehicleData.deviceId}</h2>
                    </div>
                    <p className="text-gray-400">{selectedVehicleData.owner}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center">
                      <Navigation className="w-4 h-4 mr-2" />
                      Navigate
                    </button>
                    <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-xl">
                      More
                    </button>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Location Details */}
                    <div>
                      <h3 className="font-bold text-gray-300 mb-3">Current Location</h3>
                      <div className="bg-gray-900/40 p-4 rounded-xl">
                        <div className="flex items-start">
                          <MapPin className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <p className="text-lg font-bold mb-2">{selectedVehicleData.detailedLocation}</p>
                            <p className="text-gray-400">{selectedVehicleData.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Driver Info */}
                    <div>
                      <h3 className="font-bold text-gray-300 mb-3">Driver Information</h3>
                      <div className="bg-gray-900/40 p-4 rounded-xl">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xl font-bold">{selectedVehicleData.driver}</p>
                            <p className="text-gray-400 text-sm">{selectedVehicleData.driverType}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold">{selectedVehicleData.passengers}</p>
                            <p className="text-gray-400 text-sm">Passengers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Status Timeline */}
                    <div>
                      <h3 className="font-bold text-gray-300 mb-3">Vehicle Status</h3>
                      <div className="bg-gray-900/40 p-4 rounded-xl">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-gray-400 text-sm">Current Status</p>
                              <p className={`text-xl font-bold ${
                                selectedVehicleData.status === 'Moving' ? 'text-green-400' : 'text-red-400'
                              }`}>
                                {selectedVehicleData.status}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-gray-400 text-sm">Last Ping Time</p>
                              <p className="text-lg font-bold">{selectedVehicleData.lastPing}</p>
                            </div>
                          </div>
                          
                          <div className="pt-3 border-t border-gray-800">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="text-gray-400 text-sm">Stopped Since</p>
                                <p className="text-lg font-bold text-red-400">
                                  {selectedVehicleData.stoppedSince || "N/A"}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-gray-400 text-sm">Speed</p>
                                <p className="text-lg font-bold">{selectedVehicleData.speed}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Vehicle Stats */}
                    <div>
                      <h3 className="font-bold text-gray-300 mb-3">Vehicle Stats</h3>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-gray-900/40 p-3 rounded-xl text-center">
                          <Battery className="w-6 h-6 text-green-400 mx-auto mb-1" />
                          <p className="text-lg font-bold">{selectedVehicleData.battery}</p>
                          <p className="text-gray-400 text-xs">Battery</p>
                        </div>
                        <div className="bg-gray-900/40 p-3 rounded-xl text-center">
                          <Wifi className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                          <p className="text-lg font-bold">{selectedVehicleData.signal}</p>
                          <p className="text-gray-400 text-xs">Signal</p>
                        </div>
                        <div className="bg-gray-900/40 p-3 rounded-xl text-center">
                          <span className="text-2xl mb-1">🌡️</span>
                          <p className="text-lg font-bold">{selectedVehicleData.temperature}</p>
                          <p className="text-gray-400 text-xs">Temp</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-4 mt-6 pt-6 border-t border-gray-800">
                  <button className="px-5 py-2.5 bg-green-600 hover:bg-green-700 rounded-xl flex items-center">
                    <Play className="w-4 h-4 mr-2" />
                    Start Journey
                  </button>
                  <button className="px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-xl flex items-center">
                    <Pause className="w-4 h-4 mr-2" />
                    Stop Vehicle
                  </button>
                  <button className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Send Alert
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}