import React from "react";
import Rating from "react-rating";

const Review = (props) => {
  const { name, rating, description } = props.review;
  return (
    <div className="col-6 col-lg-3">
      <div className="card h-100 text-center bg-light">
        <div className="card-header bg-light border-0">
          <i className="fas fa-quote-left fa-3x light-black"></i>
          <div>
            <Rating readonly initialRating={rating} emptySymbol="fa fa-star-o fa-lg blue-color" fullSymbol="fa fa-star fa-lg blue-color"></Rating>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">{description.substr(0, 150)}</p>
        </div>
        <div className="card-footer text-end text-muted">By {name}</div>
      </div>
    </div>
  );
};

export default Review;
