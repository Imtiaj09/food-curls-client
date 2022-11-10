import React from "react";
import { useLoaderData } from "react-router-dom";

const DetailsReview = () => {
  const { img, price, title, description } = useLoaderData();
  return (
    <div>
      <div className="mb-6 overflow-hidden bg-white rounded-lg shadow-md">
        <img className="object-cover w-full h-64" src={img} alt="Article" />
        <div className="p-6">
          <div>
            <span className="text-xl font-medium text-blue-600 uppercase dark:text-blue-400">
              Price: {price}
            </span>
            <a
              href="#"
              className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-black hover:text-gray-600 hover:underline"
              tabindex="0"
              role="link"
            >
              {title}
            </a>
            <p className="mt-2 text-sm text-black dark:text-black">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsReview;
