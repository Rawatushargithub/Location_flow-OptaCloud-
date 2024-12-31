import React from 'react';

const LocationModal = ({ onEnableLocation, onSearchManually }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
        <h2 className="text-lg font-bold text-gray-700 mb-4">
          Enable Location Access
        </h2>
        <p className="text-gray-600 mb-6">
          We need access to your location to provide better delivery options.
        </p>
        <div className="flex flex-col gap-4">
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
            onClick={onEnableLocation}
          >
            Enable Location
          </button>
          <button
            className="bg-gray-200 border-2 border-grey text-red-500 py-2 px-4 rounded-md hover:bg-gray-300"
            onClick={onSearchManually}
          >
            Search Manually
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
