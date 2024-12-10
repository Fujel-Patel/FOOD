import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';


function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const onlineStatus = useOnlineStatus();

  // Toggle the dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white w-full px-4 md:px-20 py-3 shadow-lg text-black sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between flex-wrap">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src='https://t4.ftcdn.net/jpg/02/74/91/33/360_F_274913349_r9tG4fw95BxhJEVbKPoO3NGtvHgEExmw.jpg'// Corrected path for public folder
            className="h-20 w-20  mr-3 rounded"
            alt="Logo"
          />
          <span className="text-2xl font-bold hidden sm:inline">Foody</span>
        </div>

        {/* Navigation Menu */}
        <nav
          ref={dropdownRef}
          className={`${
            isDropdownOpen ? 'block' : 'hidden'
          } md:block mt-3 md:mt-0 transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 font-semibold text-lg md:text-xl">
            <li className='className="hover:bg-blue-700 px-3 py-1 rounded-md transition duration-300 cursor-pointer'>
              Online Status : {onlineStatus ? "🟢" : "🔴"}
            </li>
            <li className="hover:bg-yellow-500 px-3 py-1 rounded-md transition duration-300 cursor-pointer">
              <Link to="/FOOD">Home</Link>
            </li>
            <li className="hover:bg-yellow-500 px-3 py-1 rounded-md transition duration-300 cursor-pointer">
              <Link to="/FOOD/About">About</Link>
            </li>
            <li className="hover:bg-yellow-500 px-3 py-1 rounded-md transition duration-300 cursor-pointer">
              <Link to="/FOOD/Contact">Contact Us</Link>
            </li>
            <li className="hover:bg-yellow-500 px-3 py-1 rounded-md transition duration-300 cursor-pointer">
              <Link to="/FOOD/Cart">Cart</Link>
            </li>
          </ul>
        </nav>

        {/* <div className=''>
          <ul className='flex flex-col md:flex-row md:space-x-6 font-semibold text-lg md:text-xl'>
            <li className='hover:bg-blue-700 px-3 py-1 rounded-md transition duration-300 cursor-pointer'>
              <Link>Sign-In</Link>
            </li>
            <li className='hover:bg-blue-700 px-3 py-1 rounded-md transition duration-300 cursor-pointer'>
              <Link>Sign-Up</Link>
            </li>
          </ul>
        </div> */}
        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button
            onClick={toggleDropdown}
            className="text-white focus:outline-none hover:text-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;