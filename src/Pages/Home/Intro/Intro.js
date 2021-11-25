import React from "react";
import { Link } from "react-router-dom";
import introBanner from "../../../Images/About/introAbout.jpg";

const Intro = () => {
  return (
    <div className="container overflow-hidden my-5">
      <div className="row gy-5">
        <div className="col-12 col-md-6">
          <div className="p-3">
            <h2 className="fw-extrabold blue-color">
              CHRONO DIAL PREMIUM STORE <br /> FOR WRIST WATCHES
            </h2>
            <p className="fs-5">
              Luxury watches are destined never to go out of fashion. Even though we now have clocks on our phones, nothing beats the exceptional elegance of a beautifully crafted timepiece. Suddenly, checking the time becomes a rather exciting
              endeavour. The Watches We Sell Are Original And Vendor Certified For A Peerless Performance. By wearing a luxury watch, you are also joining a truly exclusive club.
            </p>
            <Link to="/about">
              <button className="default-btn">About Us</button>
            </Link>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="p-3">
            <img className="img-fluid" src={introBanner} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
