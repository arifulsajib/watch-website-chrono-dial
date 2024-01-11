import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Watch from "../Home/Watch/Watch";

const AllCollections = () => {
  const [watches, setWatches] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://chrono-dial-server.onrender.com/watchCollection")
      .then((res) => res.json())
      .then((data) => {
        setWatches(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="my-5">
      <h2 className="text-center blue-color">
        <i className="fab fa-servicestack"></i> All Primium Collections
      </h2>
      <p className="text-center fs-5">We always provide the best quality products. Explore the best watch according to your choice.</p>
      <div className="container">
        <div className="row g-3">
          {isLoading ? ( //Checkif if is loading
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            watches.map((watch) => <Watch key={watch._id} watch={watch}></Watch>)
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCollections;
