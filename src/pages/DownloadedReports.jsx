import React, { useState } from 'react'
import { Download, FileText, Image, Music, Film, Folder, Calendar, Clock, Filter, Search, MoreVertical, Eye, Trash2, Share2 } from 'lucide-react'

function DownloadedReports() {
  const [selectedFiles, setSelectedFiles] = useState([])
  const [sortBy, setSortBy] = useState('date')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'

  const files = [
    {
      id: 1,
      name: 'Download',
      type: 'folder',
      icon: '📁',
      count: 89,
      lastModified: '09.12.2025 11:54:12',
      size: '2.4 GB',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      name: 'Pictures',
      type: 'folder',
      icon: '🖼️',
      count: 13,
      lastModified: '08.09.2025 02:03:27',
      size: '1.2 GB',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      name: 'DCIM',
      type: 'folder',
      icon: '📸',
      count: 5,
      lastModified: '24.08.2025 11:08:43',
      size: '850 MB',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      name: 'Music',
      type: 'folder',
      icon: '🎵',
      count: 8,
      lastModified: '07.12.2024 10:22:20',
      size: '650 MB',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      name: 'Movies',
      type: 'folder',
      icon: '🎬',
      count: 7,
      lastModified: '15.08.2024 17:53:34',
      size: '4.8 GB',
      color: 'from-red-500 to-rose-500'
    },
    {
      id: 6,
      name: 'blockcanary',
      type: 'folder',
      icon: '📊',
      count: 0,
      lastModified: '02.08.2024 08:47:30',
      size: '0 B',
      color: 'from-gray-500 to-gray-600'
    },
    {
      id: 7,
      name: 'backups',
      type: 'folder',
      icon: '💾',
      count: 1,
      lastModified: '13.07.2024 00:32:33',
      size: '320 MB',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      id: 8,
      name: '.FileManagerRecycler',
      type: 'folder',
      icon: '🗑️',
      count: 0,
      lastModified: '16.09.2023 14:15:54',
      size: '0 B',
      color: 'from-gray-600 to-gray-700'
    },
    {
      id: 9,
      name: 'Documents',
      type: 'folder',
      icon: '📄',
      count: 1,
      lastModified: '05.04.2023 22:16:48',
      size: '45 MB',
      color: 'from-blue-600 to-indigo-500'
    },
    {
      id: 10,
      name: 'inShare',
      type: 'folder',
      icon: '📤',
      count: 6,
      lastModified: '28.02.2023 21:47:57',
      size: '780 MB',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      id: 11,
      name: 'GPS_Report_December.pdf',
      type: 'file',
      icon: '📊',
      count: null,
      lastModified: '18.12.2024 14:30:15',
      size: '12 MB',
      color: 'from-red-400 to-orange-400'
    },
    {
      id: 12,
      name: 'Vehicle_Tracking_Data.csv',
      type: 'file',
      icon: '📈',
      count: null,
      lastModified: '17.12.2024 11:20:45',
      size: '8 MB',
      color: 'from-green-400 to-emerald-400'
    }
  ]

  const storageStats = {
    total: '10 GB',
    used: '6.2 GB',
    free: '3.8 GB',
    usagePercentage: 62
  }

  const handleSelectFile = (fileId) => {
    if (selectedFiles.includes(fileId)) {
      setSelectedFiles(selectedFiles.filter(id => id !== fileId))
    } else {
      setSelectedFiles([...selectedFiles, fileId])
    }
  }

  const getFileIcon = (type) => {
    const icons = {
      folder: '📁',
      pdf: '📊',
      csv: '📈',
      image: '🖼️',
      music: '🎵',
      video: '🎬',
      default: '📄'
    }
    return icons[type] || icons.default
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">📥 Downloaded Reports & Files</h1>
          <p className="text-gray-400">Manage and access all your downloaded tracking files and reports</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition duration-300 font-medium flex items-center shadow-lg shadow-blue-500/20">
            <Download className="w-4 h-4 mr-2" />
            Download New
          </button>
          <button className="px-4 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition duration-300 font-medium flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
        </div>
      </div>

      {/* Storage Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-2xl p-5 border border-blue-800/30">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-2xl font-bold text-white mb-1">{storageStats.total}</div>
              <div className="text-blue-200 font-medium">Total Storage</div>
            </div>
            <div className="text-3xl">💾</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-2xl p-5 border border-green-800/30">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-2xl font-bold text-white mb-1">{storageStats.used}</div>
              <div className="text-green-200 font-medium">Used Space</div>
            </div>
            <div className="text-3xl">📊</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-2xl p-5 border border-purple-800/30">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-2xl font-bold text-white mb-1">{storageStats.free}</div>
              <div className="text-purple-200 font-medium">Free Space</div>
            </div>
            <div className="text-3xl">🆓</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-gray-800 to-gray-900/50 rounded-2xl p-5 border border-gray-700">
          <div className="flex items-center">
            <div className="flex-1">
              <div className="text-sm text-gray-400 mb-2">Storage Usage</div>
              <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                  style={{ width: `${storageStats.usagePercentage}%` }}
                ></div>
              </div>
            </div>
            <div className="ml-4 text-2xl font-bold text-white">{storageStats.usagePercentage}%</div>
          </div>
        </div>
      </div>

      {/* Search and Controls */}
      <div className="bg-gray-900/50 rounded-2xl p-5 border border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search files and folders..."
              className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
            />
          </div>

          {/* View Controls */}
          <div className="flex items-center space-x-4">
            <div className="flex bg-gray-800 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg transition ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg transition ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                List
              </button>
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500"
            >
              <option value="date">Sort by Date</option>
              <option value="name">Sort by Name</option>
              <option value="size">Sort by Size</option>
              <option value="type">Sort by Type</option>
            </select>
          </div>
        </div>

        {/* Selected Files Actions */}
        {selectedFiles.length > 0 && (
          <div className="mt-4 p-4 bg-blue-900/20 rounded-xl border border-blue-800/30">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-white font-medium mr-3">
                  {selectedFiles.length} item{selectedFiles.length !== 1 ? 's' : ''} selected
                </span>
                <button className="text-sm text-blue-400 hover:text-blue-300 mr-4">Select All</button>
                <button className="text-sm text-gray-400 hover:text-gray-300" onClick={() => setSelectedFiles([])}>
                  Clear
                </button>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm flex items-center">
                  <Download className="w-3 h-3 mr-1" />
                  Download
                </button>
                <button className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm flex items-center">
                  <Share2 className="w-3 h-3 mr-1" />
                  Share
                </button>
                <button className="px-3 py-1.5 bg-red-600/20 hover:bg-red-600/30 text-red-300 rounded-lg text-sm flex items-center">
                  <Trash2 className="w-3 h-3 mr-1" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Files Grid View */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {files.map((file) => (
            <div
              key={file.id}
              className={`bg-gradient-to-br ${file.color} rounded-2xl p-5 border border-gray-800/50 shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer relative group ${
                selectedFiles.includes(file.id) ? 'ring-2 ring-blue-400 ring-offset-2 ring-offset-gray-900' : ''
              }`}
              onClick={() => handleSelectFile(file.id)}
            >
              {/* Selection Checkbox */}
              <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${
                selectedFiles.includes(file.id) 
                  ? 'bg-blue-500 border-blue-500' 
                  : 'bg-gray-900/50 border-gray-700 group-hover:border-gray-500'
              }`}>
                {selectedFiles.includes(file.id) && (
                  <span className="text-white text-sm">✓</span>
                )}
              </div>

              {/* File/Folder Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                  <span className="text-4xl">{file.icon}</span>
                </div>
              </div>

              {/* File Info */}
              <div>
                <h3 className="text-lg font-bold text-white mb-2 truncate">{file.name}</h3>
                
                <div className="space-y-2">
                  {file.count !== null && (
                    <div className="flex items-center text-gray-200">
                      <span className="mr-2">{file.type === 'folder' ? '📁' : '📄'}</span>
                      <span className="text-sm">
                        {file.count} {file.type === 'folder' ? 'items' : 'pages'}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center text-gray-300 text-sm">
                    <Calendar className="w-3 h-3 mr-2" />
                    <span>{file.lastModified}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-300 text-sm">
                    <span className="mr-2">📏</span>
                    <span>{file.size}</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-4 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex justify-between">
                  <button className="text-sm text-white hover:text-blue-300 transition">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="text-sm text-white hover:text-green-300 transition">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="text-sm text-white hover:text-red-300 transition">
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button className="text-sm text-white hover:text-purple-300 transition">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* List View */
        <div className="bg-gray-900/50 rounded-2xl border border-gray-800 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-800">
            <thead className="bg-gray-900/70">
              <tr>
                <th className="px-6 py-4 text-left">
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded border border-gray-600 mr-3"></div>
                    <span className="text-xs font-semibold text-gray-400 uppercase">Name</span>
                  </div>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase">Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase">Items</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase">Size</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase">Last Modified</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {files.map((file) => (
                <tr 
                  key={file.id} 
                  className={`hover:bg-gray-800/30 transition cursor-pointer ${
                    selectedFiles.includes(file.id) ? 'bg-blue-900/10' : ''
                  }`}
                  onClick={() => handleSelectFile(file.id)}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${file.color} flex items-center justify-center mr-3`}>
                        <span className="text-lg">{file.icon}</span>
                      </div>
                      <div>
                        <div className="font-medium text-white">{file.name}</div>
                        <div className="text-sm text-gray-400">{file.type === 'folder' ? 'Folder' : 'File'}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      file.type === 'folder' 
                        ? 'bg-blue-900/30 text-blue-300' 
                        : 'bg-green-900/30 text-green-300'
                    }`}>
                      {file.type === 'folder' ? 'Folder' : 'File'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-white font-medium">
                      {file.count !== null ? file.count : '-'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-white font-medium">{file.size}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-300">{file.lastModified}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button className="p-2 hover:bg-gray-700 rounded-lg transition">
                        <Eye className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-700 rounded-lg transition">
                        <Download className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-700 rounded-lg transition">
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Empty State */}
      {files.length === 0 && (
        <div className="text-center py-16 bg-gray-900/30 rounded-2xl border border-gray-800">
          <div className="text-6xl mb-4">📂</div>
          <h3 className="text-xl font-bold text-white mb-2">No Downloaded Files</h3>
          <p className="text-gray-400 mb-6">Your downloaded reports and files will appear here</p>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition duration-300 font-medium">
            Download Your First Report
          </button>
        </div>
      )}

      {/* Footer Stats */}
      <div className="bg-gray-900/50 rounded-2xl p-5 border border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            Showing <span className="text-white font-bold">{files.length}</span> items • 
            <span className="ml-2">Total: {storageStats.used} used of {storageStats.total}</span>
          </div>
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <button className="text-sm text-gray-400 hover:text-white transition">
              Refresh
            </button>
            <button className="text-sm text-gray-400 hover:text-white transition">
              Clear All
            </button>
            <button className="text-sm text-blue-400 hover:text-blue-300 transition">
              Backup All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadedReports