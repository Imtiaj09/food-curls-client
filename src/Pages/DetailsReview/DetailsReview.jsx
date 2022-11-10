import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const DetailsReview = () => {
  const { _id, img, price, title, description } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaceReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const rating = form.rating.value;
    const email = user?.email || "Unregister";
    const message = form.message.value;

    const reviews = {
      review: _id,
      name,
      rating,
      email,
      message,
    };
  };

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

      {/* REVIEW PART */}
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <form onSubmit={handlePlaceReview}>
            <div className="ml-14 mb-6">
              <h2 className="text-lg font-medium text-blue-600 uppercase dark:text-blue-400">
                Your review matters!
              </h2>
              <p>How was your experience?</p>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="mb-4 input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="rating"
              placeholder="Ratings"
              className="mb-4 input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              defaultValue={user?.email}
              className="mb-4 input input-bordered w-full max-w-xs"
              readOnly
            />
            <br />
            <textarea
              className="textarea textarea-bordered h-24"
              name="message"
              placeholder="Leave a Review..."
            ></textarea>
            <br />
            <input
              className="btn btn-sm btn-outline btn-info"
              type="submit"
              value="Submit"
            />
          </form>
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsReview;
