import React , {useState} from 'react'
import { FaLocationDot } from "react-icons/fa6";
import AddressManagement from './adress_management';

function Address_form() {

    const [address, setAddress] = useState({
        house: "",
        apartment: "",
        category: "",
      });
      const [isModalOpen, setIsModalOpen] = useState(true);
      const [isModalManageOpen, setIsModalManageOpen] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleCategorySelect = (category) => {
        setAddress((prev) => ({ ...prev, category }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Address Saved:", address);
        setIsModalOpen(false); // Close the address form modal
    setIsModalManageOpen(true); // Open the AddressManagement modal
      };

    
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => {console.log("cutting is working")
                setIsModalOpen(false)}}
            >
              ✖
            </button>

            <h2 className="text-xl font-bold text-center mb-2"> <FaLocationDot className='text-red-500 relative left-24 top-6'/> Raj Infrabuilds</h2>
            <p className="text-sm text-gray-500 text-center mb-4">
              near Shitla Devi Mandir, Chembur Colony, Chembur, Mumbai, Maharashtra, India
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  House / Flat / Block No.
                </label>
                <input
                  type="text"
                  name="house"
                  value={address.house}
                  onChange={handleChange}
                  placeholder="Enter House / Flat / Block No."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Apartment / Road / Area
                </label>
                <input
                  type="text"
                  name="apartment"
                  value={address.apartment}
                  onChange={handleChange}
                  placeholder="Enter Apartment / Road / Area"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Save As</h3>
                <div className="flex justify-around">
                  <button
                    type="button"
                    className={`w-12 h-12 flex items-center justify-center border rounded-full text-lg ${
                      address.category === "home"
                        ? "bg-red-500 text-white"
                        : "border-gray-300 text-gray-700"
                    }`}
                    onClick={() => handleCategorySelect("home")}
                  >
                    🏠
                  </button>
                  <button
                    type="button"
                    className={`w-12 h-12 flex items-center justify-center border rounded-full text-lg ${
                      address.category === "office"
                        ? "bg-red-500 text-white"
                        : "border-gray-300 text-gray-700"
                    }`}
                    onClick={() => handleCategorySelect("office")}
                  >
                    💼
                  </button>
                  <button
                    type="button"
                    className={`w-12 h-12 flex items-center justify-center border rounded-full text-lg ${
                      address.category === "friends"
                        ? "bg-red-500 text-white"
                        : "border-gray-300 text-gray-700"
                    }`}
                    onClick={() => handleCategorySelect("friends")}
                  >
                    👨‍👩‍👧‍👦
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Save Address
              </button>
            </form>
          </div>
          { isModalManageOpen && <AddressManagement/>}
        </div>
      
  )
}

export default Address_form
