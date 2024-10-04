import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; 
import logo from '../images/logo.png'; 
import profileImage from '../images/header-image.png'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full bg-white flex items-center justify-between p-4 md:px-10" style={{ borderBottom: '1px solid #E5E7EB' }}>
     
      <div className="flex items-center space-x-8">
       
        <img src={logo} alt="Logo" className="h-10" />
        <div className="text-xl font-semibold pl-2">Ananya's UI</div>

       
        <div className="hidden md:flex items-center space-x-8">
          <p className="text-gray-600 font-medium hover:text-[#7F56D9]">Home</p>
          <div className="relative">
            <select className="text-gray-600 font-medium hover:text-[#7F56D9] bg-white rounded-md">
              <option value="" disabled selected>Products</option>
              <option value="product1">Product 1</option>
              <option value="product2">Product 2</option>
              <option value="product3">Product 3</option>
            </select>
          </div>
          <div className="relative">
            <select className="text-gray-600 font-medium hover:text-[#7F56D9] bg-white rounded-md">
              <option value="" disabled selected>Resources</option>
              <option value="resource1">Resource 1</option>
              <option value="resource2">Resource 2</option>
              <option value="resource3">Resource 3</option>
            </select>
          </div>
          <p className="text-gray-600 font-medium hover:text-[#7F56D9]">Pricing</p>
        </div>
      </div>

      
      <div className="hidden md:flex items-center space-x-4">
        <img src={profileImage} alt="Profile" className="w-10 h-10 rounded-full bg-gray-300" />
      </div>

      <div className="md:hidden ml-4" onClick={toggleMenu}>
        {menuOpen ? (
          <XIcon className="w-6 h-6 text-gray-600" />
        ) : (
          <MenuIcon className="w-6 h-6 text-gray-600" />
        )}
      </div>

     
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <p className="text-gray-600 font-medium hover:text-[#7F56D9]">Home</p>
          <div className="relative">
            <select className="text-gray-600 font-medium hover:text-[#7F56D9] bg-white rounded-md">
              <option value="" disabled selected>Products</option>
              <option value="product1">Product 1</option>
              <option value="product2">Product 2</option>
              <option value="product3">Product 3</option>
            </select>
          </div>
          <div className="relative">
            <select className="text-gray-600 font-medium hover:text-[#7F56D9] bg-white rounded-md">
              <option value="" disabled selected>Resources</option>
              <option value="resource1">Resource 1</option>
              <option value="resource2">Resource 2</option>
              <option value="resource3">Resource 3</option>
            </select>
          </div>
          <p className="text-gray-600 font-medium hover:text-[#7F56D9]">Pricing</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
