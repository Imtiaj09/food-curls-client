import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import MyReviewCard from "./MyReviewCard";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  return (
    <div>
      <h2 className="text-5xl">You have {reviews.length} Reviews</h2>

      <div className="max-w-lg p-6 mx-auto divide-y border rounded-md divide-gray-700  dark:text-gray-100">
        {reviews.map((reviewD) => (
          <MyReviewCard key={reviewD._id} reviewD={reviewD}></MyReviewCard>
        ))}
      </div>
    </div>
  );
};

export default MyReview;
