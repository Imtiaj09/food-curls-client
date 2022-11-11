import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import MyReviewCard from "./MyReviewCard";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete the review"
    );
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Review deleted successfully",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
            const remaining = reviews.filter((revs) => revs._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-center text-3xl mt-4 font-medium text-blue-600 uppercase dark:text-blue-400">
        You have {reviews.length} Reviews
      </h2>
      <hr />

      <div className="mb-4 mt-4 max-w-lg p-6 mx-auto divide-y border rounded-md divide-gray-700  dark:text-gray-100">
        {reviews.map((reviewD) => (
          <MyReviewCard
            key={reviewD._id}
            reviewD={reviewD}
            handleDelete={handleDelete}
          ></MyReviewCard>
        ))}
      </div>
    </div>
  );
};

export default MyReview;
