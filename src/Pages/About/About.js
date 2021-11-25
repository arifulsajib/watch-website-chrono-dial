import React from "react";
import "./About.css";
import aboutBanner1 from "../../Images/About/about-banner1.jpg";
import aboutBanner2 from "../../Images/About/about-banner2.jpg";
import about1 from "../../Images/About/about1.jpg";
import about2 from "../../Images/About/about2.jpg";

const About = () => {
  return (
    <div className="container">
      <h2 className="text-center blue-color mb-4 mt-2">
        <i className="far fa-address-card"></i> About Us
      </h2>
      <h3 className="text-center">We personalize watches just for you</h3>

      <div className="about-banner row gy-5">
        <div className="col-12 col-md-6">
          <div className="p-3">
            <img className="img-fluid" src={aboutBanner1} alt="" />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="p-3">
            <img className="img-fluid" src={aboutBanner2} alt="" />
          </div>
        </div>
      </div>

      <div className="my-5">
        <p className="text-center fs-6">BRANDED & LONGLISTING</p>
        <h3 className="text-center">AFFORDABLE WATCH</h3>
        <p className="text-center fs-6">Modern and best portable timepiece</p>

        <div className="about-info">
          <div className="row gy-5 mb-5">
            <div className="col-12 col-md-6">
              <div className="p-3">
                <img className="img-fluid" src={about1} alt="" />
              </div>
            </div>

            <div className="col-12 col-md-6 d-flex align-items-center">
              <div className="p-3">
                <h2 className="fw-extrabold blue-color">
                  <i className="fas fa-lightbulb fa-lg"></i>
                </h2>
                <h3 className="my-3">Timeless watches to fit your style</h3>
                <p className="fs-5">Luxury watches are destined never to go out of fashion. The Watches We Sell Are Original And Vendor Certified For A Peerless Performance. By wearing a luxury watch, you are also joining a truly exclusive club.</p>
              </div>
            </div>
          </div>

          <div className="row gy-5">
            <div className="col-12 col-md-6 d-flex align-items-center">
              <div className="p-3">
                <h2 className="fw-extrabold blue-color text-end me-4">
                  <i className="fas fa-hourglass fa-lg"></i>
                </h2>
                <h3 className="my-3">A lot more luxury watches</h3>
                <p className="fs-5">The Watches We Sell Are Original And Vendor Certified For A Peerless Performance. By wearing a luxury watch, you are also joining a truly exclusive club. Luxury watches are destined never to go out of fashion.</p>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="p-3">
                <img className="img-fluid" src={about2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
