import React, { useState } from "react";

const AddressManagement = () => {
  const [savedAddresses, setSavedAddresses] = useState([
    { id: 1, label: "Home", address: "near Shitla Devi Mandir, Chembur Colony, Chembur, Mumbai, Maharashtra, India" },
    { id: 2, label: "Office", address: "near Shitla Devi Mandir, Chembur Colony, Chembur, Mumbai, Maharashtra, India" },
    { id: 3, label: "Friends & Family", address: "near Shitla Devi Mandir, Chembur Colony, Chembur, Mumbai, Maharashtra, India" },
  ]);

  const [recentSearches, setRecentSearches] = useState([
    "Wadala West",
    "Chembur East",
    "Wadala East",
  ]);

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectAddress = (id) => {
    setSelectedAddress(id);
    alert(`Selected Address: ${savedAddresses.find((addr) => addr.id === id).label}`);
  };

  const handleDeleteAddress = (id) => {
    setSavedAddresses(savedAddresses.filter((addr) => addr.id !== id));
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-red-600 text-center mb-4">Your Location</h1>

        {/* Search Bar */}
        <div className="flex items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search your area/pincode/apartment"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            Enable
          </button>
        </div>

        {/* Saved Locations */}
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Saved Location</h2>
        {savedAddresses.map((address) => (
          <div
            key={address.id}
            className={`p-4 border ${
              selectedAddress === address.id ? "border-red-500 bg-red-50" : "border-gray-300"
            } rounded-lg flex items-center justify-between mb-3`}
          >
            <div>
              <p className="font-bold flex items-center gap-2">
                {address.label === "Home" && "🏠"}
                {address.label === "Office" && "💼"}
                {address.label === "Friends & Family" && "👨‍👩‍👧‍👦"} {address.label}
              </p>
              <p className="text-sm text-gray-600">{address.address}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleSelectAddress(address.id)}
                className="px-3 py-1 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600"
              >
                Select
              </button>
              <button
                onClick={() => handleDeleteAddress(address.id)}
                className="px-3 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {/* Recent Searches */}
        <h2 className="text-lg font-semibold text-gray-700 mt-6 mb-3">Recent Searches</h2>
        <div>
          {recentSearches.map((location, index) => (
            <div key={index} className="flex items-center gap-2 mb-3">
              <span className="text-red-500">📍</span>
              <p className="text-sm text-gray-600">{location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddressManagement;
