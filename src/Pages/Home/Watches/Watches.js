import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Watch from "../Watch/Watch";

const Watches = () => {
  const [watches, setWatches] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://pacific-scrubland-75606.herokuapp.com/watchCollection")
      .then((res) => res.json())
      .then((data) => {
        setWatches(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="my-5">
      <h2 className="text-center blue-color">
        <i className="fab fa-servicestack"></i> Our Latest Collections
      </h2>
      <p className="text-center fs-5">We always provide the best quality products. Explore the best watch according to your choice.</p>
      <div className="container">
        <div className="row g-3 mb-2">
          {isLoading ? ( //Checkif if is loading
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            watches.slice(0, 6).map((watch) => <Watch key={watch._id} watch={watch}></Watch>)
          )}
        </div>
        <Link to="/allCollections" className="text-decoration-none">
          <button className="btn btn-outline-dark btn-lg d-block mx-auto">Explore More</button>
        </Link>
      </div>
    </div>
  );
};

export default Watches;
