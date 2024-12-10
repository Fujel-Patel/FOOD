import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-10 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Welcome to <span className="font-semibold text-teal-600">Your Foodie's Paradise</span>, where passion for food meets creativity! 
          Our mission is to bring you the most delightful recipes, cooking tips, and foodie stories 
          to inspire your culinary journey. Whether you're a seasoned chef or just starting to explore the 
          kitchen, we’re here to guide you every step of the way.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          At <span className="font-semibold text-teal-600">Your Website Name</span>, we believe that food is more than just nourishment – it's an 
          art, a culture, and a way to connect with loved ones. From quick and easy meals to gourmet delicacies, 
          our curated recipes and articles are designed to make cooking fun and accessible for everyone.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          We’re also passionate about supporting sustainable practices, showcasing local ingredients, and 
          celebrating food from around the world. Join our community and let’s make every meal an experience 
          worth remembering.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Thank you for visiting. <span className="font-semibold text-teal-600">Happy cooking!</span>
        </p>
        <p className="text-lg text-gray-500 italic mt-6">- Your Website Team</p>
      </div>
    </div>
  );
};

export default About;
