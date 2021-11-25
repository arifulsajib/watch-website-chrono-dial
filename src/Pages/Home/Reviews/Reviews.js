import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://pacific-scrubland-75606.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="reviews container content-row">
      <h2 className="blue-color text-center mb-3">
        <i className="fas fa-comment-alt"></i> Reviews
      </h2>
      <div className="row g-3">
        {isLoading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          reviews.map((review) => <Review key={review._id} review={review}></Review>)
        )}
      </div>
    </div>
  );
};

export default Reviews;
