import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="subscribe container my-5">
      <h3 className="blue-color text-center">
        <i className="fas fa-bell"></i> STAY IN THE LOOP
      </h3>
      <p className="text-secondary text-center fs-5">Be the first to know about new arrivals, deals & the best price</p>
      <div className="d-flex justify-content-center">
        <input type="email" className=" w-50 border-right-0" placeholder="Email Address" />
        <button className="subscribe-btn" type="button">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
