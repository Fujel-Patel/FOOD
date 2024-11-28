import React, { useState, useEffect, useRef } from 'react';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle the dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

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
    <header className="bg-gray-800 w-full px-4 md:px-20 py-3 shadow-lg text-white sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between flex-wrap">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            className="h-12 w-12 object-cover mr-3 rounded-full"
            src="./src/assets/food.png" // Replace with your new logo URL
            alt="Logo"
          />
          <span className="text-2xl font-bold hidden sm:inline">Foody</span>
        </div>

        {/* Navigation Menu */}
        <nav
          ref={dropdownRef}
          className={`${
            isDropdownOpen ? 'block' : 'hidden'
          } md:block mt-3 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 font-semibold text-lg md:text-xl">
            <li className="hover:bg-blue-700 px-3 py-1 rounded-md transition duration-300 cursor-pointer">
              Home
            </li>
            <li className="hover:bg-blue-700 px-3 py-1 rounded-md transition duration-300 cursor-pointer">
              About
            </li>
            <li className="hover:bg-blue-700 px-3 py-1 rounded-md transition duration-300 cursor-pointer">
              Contact Us
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button 
           onClick={toggleDropdown} 
           className="text-white focus:outline-none hover:text-blue-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;


// import React, {useState} from 'react';

// function Header() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//    // Toggle the dropdown visibility
//    const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };
//   return (
//     <header className="bg-gray-400 w-full px-4 md:px-20 py-3 shadow-lg text-white sticky top-0 z-50">
//       <div className="max-w-screen-xl mx-auto flex items-center justify-between flex-wrap">
//         {/* Logo Section */}
//         <div className="flex items-center">
//           <img
//             className="h-12 w-12 object-cover mr-3 rounded-full"
//             src="./src/assets/food.png" // Replace with your new logo URL
//             alt="Logo"
//           />
//           <span className="text-2xl font-bold hidden sm:inline">Foody</span>
//         </div>

//         {/* Navigation Menu */}
//         {isDropdownOpen && (
//         <nav className="mt-3 md:mt-0">
//             <ul className="flex space-x-4 md:space-x-6 font-semibold text-lg md:text-xl">
//             <li className="hover:bg-blue-700 px-3 py-1 rounded-md transition duration-300 cursor-pointer">
//               Home
//             </li>
//             <li className="hover:bg-blue-700 px-3 py-1 rounded-md transition duration-300 cursor-pointer">
//               About
//             </li>
//             <li className="hover:bg-blue-700 px-3 py-1 rounded-md transition duration-300 cursor-pointer">
//               Contact Us
//             </li>
//           </ul>
//         </nav>
//         )}

//         {/* Mobile Menu Button */}
//         <div className="block md:hidden">
//           <button 
//            onClick={toggleDropdown} 
//            className="text-white focus:outline-none hover:text-blue-300">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;