import React from "react";
import "./Gallery.css";
import gallery1 from "../../../Images/Gallery/gallery1.png";
import gallery2 from "../../../Images/Gallery/gallery2.png";
import gallery3 from "../../../Images/Gallery/gallery3.png";
import gallery4 from "../../../Images/Gallery/gallery4.png";
import gallery5 from "../../../Images/Gallery/gallery5.png";
import gallery6 from "../../../Images/Gallery/gallery6.png";

const Gallery = () => {
  return (
    <div className="container gallery">
      <div className="row g-2 g-lg-0">
        <div className="col-6 col-lg-2 col-md-6 overflow-hidden">
          <img src={gallery1} className="img-fluid rounded mb-4" alt="" />
        </div>
        <div className="col-6 col-lg-2 col-md-6 overflow-hidden">
          <img src={gallery2} className="img-fluid rounded mb-4" alt="" />
        </div>
        <div className="col-6 col-lg-2 col-md-6 overflow-hidden">
          <img src={gallery3} className="img-fluid rounded mb-4" alt="" />
        </div>
        <div className="col-6 col-lg-2 col-md-6 overflow-hidden">
          <img src={gallery4} className="img-fluid rounded mb-4" alt="" />
        </div>
        <div className="col-6 col-lg-2 col-md-6 overflow-hidden">
          <img src={gallery5} className="img-fluid rounded mb-4" alt="" />
        </div>
        <div className="col-6 col-lg-2 col-md-6 overflow-hidden">
          <img src={gallery6} className="img-fluid rounded mb-4" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
