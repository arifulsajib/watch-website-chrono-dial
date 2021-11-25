import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Intro from "../Intro/Intro";
import NewsLetter from "../NewsLetter/NewsLetter";
import Reviews from "../Reviews/Reviews";
import Watches from "../Watches/Watches";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Intro></Intro>
      <Watches></Watches>
      <Reviews></Reviews>
      <NewsLetter></NewsLetter>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
