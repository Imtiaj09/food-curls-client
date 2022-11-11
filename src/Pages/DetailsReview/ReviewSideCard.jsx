import React, { useEffect, useState } from "react";

const ReviewSideCard = ({ reviewField }) => {
  const { name, rating, serviceName, message, review } = reviewField;
  const [reviewService, setReviewService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${review}`)
      .then((res) => res.json())
      .then((data) => setReviewService(data));
  }, [review]);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          {reviewService?.img && <img src={reviewService.img} alt="Shoes" />}
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            <span className="font-bold">Service:</span> {serviceName}
          </p>
          <p>Review: {message}</p>
          <div className="card-actions justify-end">
            <span>Rating: {rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSideCard;
