import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Watch from "../../Home/Watch/Watch";

const ManageProducts = () => {
  const [watches, setWatches] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch("https://chrono-dial-server.onrender.com/watchCollection")
      .then((res) => res.json())
      .then((data) => {
        setWatches(data);
        setLoading(false);
      });
  }, [control]);

  return (
    <div className="my-3">
      <h2 className="text-center blue-color">
        <i className="fab fa-servicestack"></i> Manage All Products
      </h2>
      <div className="container">
        <div className="row g-3">
          {isLoading ? ( //Checkif if is loading
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            watches
              .slice(0)
              .reverse()
              .map((watch) => <Watch manageProduct={true} setControl={setControl} control={control} key={watch._id} watch={watch}></Watch>)
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
