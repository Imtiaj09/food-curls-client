import React from "react";
import { Link } from "react-router-dom";

const AllServices = ({ service }) => {
  const { _id, img, price, title, description } = service;
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
      <img className="object-cover w-full h-48 mt-2" src={img} alt="" />
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-white">Price: ${price}</h1>
        <Link to={`/detailsreview/${_id}`}>
          <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllServices;
