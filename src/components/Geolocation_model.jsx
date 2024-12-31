import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { FaLocationDot } from "react-icons/fa6";
import Address_form from './Address_form';

const Geolocation = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, // Replace with your API Key
  });

  const [currentPosition, setCurrentPosition] = useState({ lat: 19.076, lng: 72.8777 }); // Default: Mumbai
  const [selectedAddress, setSelectedAddress] = useState('Raj Infrabuilds, Chembur, Mumbai');
  const [isLocationEnabled, setIsLocationEnabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLocateMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({ lat: latitude, lng: longitude });
          setIsLocationEnabled(true);
        },
        (error) => {
          console.error('Error fetching location:', error);
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  const handleMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCurrentPosition({ lat, lng });
    // You can add reverse geocoding logic here to update the address.
    setSelectedAddress('Updated Address (Reverse Geocoding Result)');
  };

  if (!isLoaded) return <div>Loading Map...</div>;

  const change_address = () => {
     setIsModalOpen(true)
  }

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold text-center">Location Information</h2>
      <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg mt-4">
        <GoogleMap
          zoom={15}
          center={currentPosition}
          mapContainerClassName="w-full h-full"
        >
          <Marker
            position={currentPosition}
            draggable
            onDragEnd={handleMarkerDragEnd}
          />
        </GoogleMap>
      </div>
      <div className="mt-4 bg-white absolute p-4 rounded-lg  ">
    
        <button
          onClick={handleLocateMe}
          className="w-36 ml-[650px] mt-2 shadow-md hover:bg-red-600 bg-red-500  text-white py-2 px-4 rounded-md"
        >
          Locate Me
        </button>
        <div className="mt-7 w-96 ml-[350px]  ">
          <h3 className="text-sm font-semibold">Select Your Delivery Location</h3>
          <p className="text-lg font-bold flex items-center">
            <span className="text-red-500 mr-2"><FaLocationDot/></span> {selectedAddress}
          </p>
        </div>

            <button className="relative left-[1000px] bg-gray-300 w-36 text-black py-2 rounded-md hover:bg-gray-400 ">Enable</button>
            <button className="relative left-[855px] bottom-16 bg-red-500 text-white py-2 w-36 rounded-md hover:bg-red-600" onClick={change_address}>Change</button>
          
      </div>
      {isModalOpen && <Address_form/>}
    </div>

  );
};

export default Geolocation;
