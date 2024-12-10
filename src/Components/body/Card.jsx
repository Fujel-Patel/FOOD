import React from 'react';
import restaurant from './resData';

function Card(props) {
  const { resData = restaurant } = props;
  const { imgSrc, name, cuisine, price, avgRating, avgDeliveryTime } = resData;

  return (
    <div className="font-bold hover:border-4 cursor-pointer m-3 p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={imgSrc} alt="404 not found" />
      <div className="p-4">
        <h3 className="text-xl mb-1">{name}</h3>
        <h4 className="text-gray-700">{cuisine}</h4>
        <h4 className="text-gray-900 font-semibold">{price} Rupees</h4>
        <h4 className="text-yellow-600">{avgRating} ★</h4>
        <h4 className="text-gray-600">{avgDeliveryTime}</h4>
      </div>
    </div>
  );
}

export default Card;