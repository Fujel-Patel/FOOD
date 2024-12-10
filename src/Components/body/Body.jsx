import React, { useState, useEffect } from 'react';
import Card from './Card';
import restaurnt from './resData';

function Body() {
  const [search, setSearch] = useState(""); // Search term
  const [restaurant, setRestaurant] = useState(restaurnt); // Initialize with full restaurant data

  useEffect(() => {
    setRestaurant(restaurnt); // Ensure `restaurant` is initialized with full data
  }, []);

  // Filter restaurants based on search input
  const filteredRestaurants = restaurant.filter((res) =>
    search === "" ? true : res.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center px-4 md:px-20 py-8 space-y-8">
      {/* Search Bar */}
      <div className="w-full md:w-1/2 flex items-space">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Update search text
          placeholder="Search for your favorite restaurant..."
          className="w-full p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:border-blue-400"
        />
      </div>

      {/* Card Container */}
      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((res) => (
            <Card key={res.id} resData={res} />
          ))
        ) : (
          <p className="text-gray-500 text-lg">No restaurants found.</p>
        )}
      </div>
    </div>
  );
}

export default Body;


// import React, { useState } from 'react';
// import Card from './Card';
// import restaurnt from './resData';

// console.log(restaurnt)
// function Body() {
//   const [search, setSearch] = useState("");
//   const [restaurant, setRestaurant] = useState("");

//   // const handleSearch = (event) => {
//   //   ()=>{
//   //     console.log(search)
//   //     const filteredRestaurnt = restaurant.filter((restaurant) => {
//   //       restaurant.name.toLowerCase().includes(search.toLowerCase());
//   //     });
//   //     setRestaurant(filteredRestaurnt);
//   //   }
//   // };

//   return (
//     <div className="flex flex-col items-center px-4 md:px-20 py-8 space-y-8">
      
//       {/* Search Bar */}
//       <div className='w-full md:w-1/2 flex items-space'>
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search for your favorite restaurant..."
//           className="w-full p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:border-blue-400"
//         />
//         {/* <button
//           onClick={handleSearch}
//           className="bg-blue-500 text-white px-6 py-3 rounded-r-lg hover:bg-blue-600 transition duration-300"
//         >
//           Search
//         </button> */}
//       </div>      
//       {/* Card Container */}
//       <div className="flex flex-wrap justify-center">
//         {
//           restaurant.filter((res) => {
//             search === "" ? res : res.name.toLowerCase().includes(search.toLowerCase());
//           })
//          .map((res) => (
//           <Card key={res.id} resData={res} />
//         ))
//         }
//       </div>
//     </div>
//   );
// }

// export default Body;