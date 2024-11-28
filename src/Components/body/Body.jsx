import React, { useState } from 'react';
import Card from './Card';
import restaurant from './resData';

function Body() {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Search Query:', query);
    // Here you would typically perform the search action
  };

  return (
    <div className="flex flex-col items-center px-4 md:px-20 py-8 space-y-8">
      
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="w-full md:w-1/2 flex items-space">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target  .value)}
          placeholder="Search for your favorite restaurant..."
          className="w-full p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:border-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-r-lg hover:bg-blue-600 transition duration-300"
        >
          Search
        </button>
      </form>

      {/* Card Container */}
      <div className="flex flex-wrap justify-center">
        {restaurant.map((res) => (
          <Card key={res.id} resData={res} />
        ))}
      </div>
    </div>
  );
}

export default Body;