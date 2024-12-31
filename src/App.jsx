import React, { useState } from "react";
import LocationModal from "./components/localtion_model";
import Geolocation from "./components/Geolocation_model";


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isGeolocationEnabled, setIsGeolocationEnabled] = useState(false); // New state to track geolocation rendering


  const handleEnableLocation = () => {
    setIsModalOpen(false); // Close the modal
    setIsGeolocationEnabled(true); // Enable geolocation component
   
  };

  const handleSearchManually = () => {
    setIsModalOpen(false); // Close the modal
    setIsGeolocationEnabled(true); // Enable geolocation component
  };

  return (
    <div>
      {isModalOpen && (
        <LocationModal
          onEnableLocation={handleEnableLocation}
          onSearchManually={handleSearchManually}
        />
      )}

  {isGeolocationEnabled && <Geolocation />} {/* Conditionally render Geolocation */}

    </div>
  );
};

export default App;
