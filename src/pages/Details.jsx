import React, { useState } from 'react'

function Details() {
  // State for form data
  const [formData, setFormData] = useState({
    deviceAccountExpiryDate: '2026-08-25',
    driverContactNumber: '9773668656',
    driverName: '',
    category: 'Car',
    speedLimit: '60',
    fuelMileage: '25',
    idleDetectTime: '15',
    documents: [
      {
        id: 1,
        name: 'Rajesh Kumar',
        expiryDate: '2021-07-06',
        alertBeforeDays: '3',
        alertAfterDays: '2'
      },
      {
        id: 2,
        name: 'E.g. Insurance, Pollution etc.',
        expiryDate: '2026-12-18',
        alertBeforeDays: '2',
        alertAfterDays: '2'
      },
      {
        id: 3,
        name: 'E.g. Insurance, Pollution etc.',
        expiryDate: '2026-12-18',
        alertBeforeDays: '2',
        alertAfterDays: '3'
      },
      {
        id: 4,
        name: 'E.g. Insurance, Pollution etc.',
        expiryDate: '2026-12-18',
        alertBeforeDays: '2',
        alertAfterDays: '2'
      }
    ]
  });

  // Handle input changes
  const handleInputChange = (e, field, index = null) => {
    if (index !== null) {
      // For document fields
      const updatedDocuments = [...formData.documents];
      updatedDocuments[index][field] = e.target.value;
      setFormData({
        ...formData,
        documents: updatedDocuments
      });
    } else {
      // For main form fields
      setFormData({
        ...formData,
        [field]: e.target.value
      });
    }
  };

  // Add new document row
  const addDocumentRow = () => {
    const newDocument = {
      id: formData.documents.length + 1,
      name: '',
      expiryDate: '',
      alertBeforeDays: '',
      alertAfterDays: ''
    };
    setFormData({
      ...formData,
      documents: [...formData.documents, newDocument]
    });
  };

  // Remove document row
  const removeDocumentRow = (index) => {
    const updatedDocuments = formData.documents.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      documents: updatedDocuments
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Device Configuration</h1>
          <p className="text-gray-400 mt-2">Configure device settings and document details</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Main Configuration Section */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-6 pb-3 border-b border-gray-700">Device Settings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Device Account Expiry Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Device Account Expiry Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.deviceAccountExpiryDate}
                      onChange={(e) => handleInputChange(e, 'deviceAccountExpiryDate')}
                      className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="absolute right-3 top-3 text-gray-400">
                      Aug 25, 2026
                    </div>
                  </div>
                </div>

                {/* Driver Contact Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Driver Contact Number
                  </label>
                  <input
                    type="tel"
                    value={formData.driverContactNumber}
                    onChange={(e) => handleInputChange(e, 'driverContactNumber')}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter contact number"
                  />
                </div>

                {/* Driver Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Driver Name
                  </label>
                  <input
                    type="text"
                    value={formData.driverName}
                    onChange={(e) => handleInputChange(e, 'driverName')}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter driver name"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange(e, 'category')}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Car">Car</option>
                    <option value="Truck">Truck</option>
                    <option value="Bus">Bus</option>
                    <option value="Motorcycle">Motorcycle</option>
                    <option value="Van">Van</option>
                  </select>
                </div>

                {/* Speed Limit */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Speed Limit (In km/h)
                  </label>
                  <input
                    type="number"
                    value={formData.speedLimit}
                    onChange={(e) => handleInputChange(e, 'speedLimit')}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter speed limit"
                  />
                </div>

                {/* Fuel Mileage */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Fuel Mileage (In km/l)
                  </label>
                  <input
                    type="number"
                    value={formData.fuelMileage}
                    onChange={(e) => handleInputChange(e, 'fuelMileage')}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter fuel mileage"
                  />
                </div>

                {/* Idle Detect Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Idle Detect Time (Works when Idle notification enabled)
                  </label>
                  <input
                    type="number"
                    value={formData.idleDetectTime}
                    onChange={(e) => handleInputChange(e, 'idleDetectTime')}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter idle detect time"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Documents Section */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 mb-8">
            <div className="flex justify-between items-center mb-6 pb-3 border-b border-gray-700">
              <h2 className="text-xl font-bold text-white">Document Management</h2>
              <button
                type="button"
                onClick={addDocumentRow}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition duration-300 font-medium"
              >
                + Add Document
              </button>
            </div>

            {/* Table for Documents */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-gray-300 font-medium">Name</th>
                    <th className="text-left py-3 px-4 text-gray-300 font-medium">Expiry Date</th>
                    <th className="text-left py-3 px-4 text-gray-300 font-medium">Send Alert Before Days</th>
                    <th className="text-left py-3 px-4 text-gray-300 font-medium">Send Alert After Days</th>
                    <th className="text-left py-3 px-4 text-gray-300 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.documents.map((doc, index) => (
                    <tr key={doc.id} className="border-b border-gray-800 hover:bg-gray-800/20 transition">
                      <td className="py-4 px-4">
                        <input
                          type="text"
                          value={doc.name}
                          onChange={(e) => handleInputChange(e, 'name', index)}
                          className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter document name"
                        />
                      </td>
                      <td className="py-4 px-4">
                        <input
                          type="date"
                          value={doc.expiryDate}
                          onChange={(e) => handleInputChange(e, 'expiryDate', index)}
                          className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                        />
                      </td>
                      <td className="py-4 px-4">
                        <input
                          type="number"
                          value={doc.alertBeforeDays}
                          onChange={(e) => handleInputChange(e, 'alertBeforeDays', index)}
                          className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Days"
                        />
                      </td>
                      <td className="py-4 px-4">
                        <input
                          type="number"
                          value={doc.alertAfterDays}
                          onChange={(e) => handleInputChange(e, 'alertAfterDays', index)}
                          className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Days"
                        />
                      </td>
                      <td className="py-4 px-4">
                        <button
                          type="button"
                          onClick={() => removeDocumentRow(index)}
                          className="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 hover:text-red-300 rounded-xl transition duration-300 font-medium border border-red-700/30"
                        >
                          CLEAR
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Empty row for adding new document */}
            <div className="mt-6">
              <div className="flex items-center justify-between p-4 bg-gray-900/30 rounded-xl border border-gray-700">
                <div className="flex items-center space-x-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="date"
                    placeholder="Expiry Date"
                    className="bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">Send Alert Before Days</span>
                    <input
                      type="number"
                      placeholder="Days"
                      className="w-20 bg-gray-800/50 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">Send Alert After Days</span>
                    <input
                      type="number"
                      placeholder="Days"
                      className="w-20 bg-gray-800/50 border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={addDocumentRow}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-xl transition duration-300 font-medium"
                >
                  ADD
                </button>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl transition duration-300 font-medium text-lg"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Details