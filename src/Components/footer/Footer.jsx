import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
        
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">Foodie's Paradise</h2>
          <p className="text-gray-400 mt-2">Your go-to site for all things delicious!</p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-300">Quick Links</h3>
          <ul className="list-none space-y-2">
            <li><a href="/about" className="hover:text-yellow-400 transition duration-300">About Us</a></li>
            <li><a href="/menu" className="hover:text-yellow-400 transition duration-300">Menu</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition duration-300">Contact</a></li>
            <li><a href="/blog" className="hover:text-yellow-400 transition duration-300">Blog</a></li>
          </ul>
        </div>
        
        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-300">Follow Us</h3>
          <ul className="list-none space-y-2">
            <li><a href="https://facebook.com" className="hover:text-yellow-400 transition duration-300">Facebook</a></li>
            <li><a href="https://instagram.com" className="hover:text-yellow-400 transition duration-300">Instagram</a></li>
            <li><a href="https://twitter.com" className="hover:text-yellow-400 transition duration-300">Twitter</a></li>
          </ul>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="text-center mt-8 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Foodie's Paradise. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-200 text-black py-8">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
//         {/* Logo and Description */}
//         <div className="mb-4 md:mb-0">
//           <h2 className="text-2xl font-bold">Foodie's Paradise</h2>
//           <p className="text-gray-400">Your go-to site for all things delicious!</p>
//         </div>
        
//         {/* Quick Links */}
//         <div className="mb-4 md:mb-0">
//           <h3 className="text-xl font-semibold">Quick Links</h3>
//           <ul className="list-none space-y-2">
//             <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
//             <li><a href="/menu" className="hover:text-gray-400">Menu</a></li>
//             <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
//             <li><a href="/blog" className="hover:text-gray-400">Blog</a></li>
//           </ul>
//         </div>
        
//         {/* Social Media Links */}
//         <div className="mb-4 md:mb-0">
//           <h3 className="text-xl font-semibold">Follow Us</h3>
//           <ul className="list-none space-y-2">
//             <li><a href="https://facebook.com" className="hover:text-gray-400">Facebook</a></li>
//             <li><a href="https://instagram.com" className="hover:text-gray-400">Instagram</a></li>
//             <li><a href="https://twitter.com" className="hover:text-gray-400">Twitter</a></li>
//           </ul>
//         </div>
//       </div>
      
//       {/* Copyright Section */}
//       <div className="text-center mt-6 text-gray-500">
//         <p>&copy; {new Date().getFullYear()} Foodie's Paradise. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
