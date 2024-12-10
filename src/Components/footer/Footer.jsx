import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
        
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">Foodie's Paradise</h2>
          <p className="text-green-300 mt-2">Your go-to site for all things delicious!</p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-300">Quick Links</h3>
          <ul className="list-none space-y-2">
            <li><Link to="/FOOD/About" className="hover:text-yellow-400 transition duration-300">About Us</Link></li>
            <li><Link to="/FOOD/Contact" className="hover:text-yellow-400 transition duration-300">Contact</Link></li>
            <li><Link to="/menu" className="hover:text-yellow-400 transition duration-300">Menu</Link></li>
            <li><Link to="/blog" className="hover:text-yellow-400 transition duration-300">Blog</Link></li>
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