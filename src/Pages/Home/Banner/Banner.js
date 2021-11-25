import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../Images/Banner/banner1.jpg";
import banner2 from "../../../Images/Banner/banner2.jpg";
import banner3 from "../../../Images/Banner/banner3.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} pause="false">
      <Carousel.Item>
        <img className="d-block w-100 fixed-height" src={banner1} alt="First slide" />
        <Carousel.Caption className="caption rounded-3">
          <h3>Stylish</h3>
          <p>Choose from the best stylish watches</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 fixed-height" src={banner2} alt="Second slide" />

        <Carousel.Caption className="caption">
          <h3>Unique</h3>
          <p>Unique and fashionable collection</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 fixed-height" src={banner3} alt="Third slide" />

        <Carousel.Caption className="caption">
          <h3>Primium</h3>
          <p>Choose from the most premium watches</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
