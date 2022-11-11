import React from "react";
import { PhotoView } from "react-photo-view";

const ServicesCard = ({ service }) => {
  const { img, price, title, description } = service;
  console.log(service);
  return (
    <div className="max-w-xs overflow-hidden bg-white border rounded-lg shadow-lg ">
      <div className="px-4 py-2">
        <h1 className="text-lg font-bold text-gray-800 uppercase dark:text-black">
          {title}
        </h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {description?.slice(0, 100) + "..."}
        </p>
      </div>

      <figure>
        <PhotoView src={img}>
          <img className="object-cover w-full h-48 mt-2" src={img} alt="" />
        </PhotoView>
      </figure>

      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-white">Price: ${price}</h1>

        <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ServicesCard;
