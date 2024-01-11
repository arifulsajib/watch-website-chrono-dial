import React from "react";
import "./Watch.css";
import { Link } from "react-router-dom";

const Watch = (props) => {
  const { _id, name, price, pic, details, brand } = props.watch;
  const { manageProduct, setControl, control } = props;

  const handleProductDelete = (id) => {
    const checker = window.confirm("Are you sure to delete?");
    if (checker) {
      fetch(`https://chrono-dial-server.onrender.com/deleteProduct/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setControl(!control);
            alert("Delelted Successfully");
          } else {
            setControl(false);
          }
        });
    }
  };

  return (
    <>
      <div className="watch-card col-12 col-md-6 col-lg-4">
        <div className="card h-100 overflow-hidden">
          <img src={pic} className="card-img-top" alt="..." height={manageProduct ? "230" : "300"} />
          <div className="card-body">
            <h5 className="card-title text-center">{name}</h5>
            <p>{details.substr(0, 120)}</p>
            {manageProduct && (
              <h6 className="mb-3">
                <i className="fas fa-envelope-square blue-color"></i> Added By: {props.watch?.addedBy}
              </h6>
            )}
            <h6 className="mb-3">
              <i className="fab fa-bandcamp blue-color"></i> Brand: {brand}
            </h6>
            <h6>
              <i className="fas fa-comment-dollar blue-color"></i> Price: {price}$
            </h6>
          </div>
          <div className="card-footer border-0 bg-white shadow">
            {manageProduct ? (
              <button onClick={() => handleProductDelete(_id)} className="btn btn-danger d-block mx-auto">
                Delete
              </button>
            ) : (
              <Link to={`/placeOrder/${_id}`} className="text-decoration-none">
                <button className="default-btn d-block mx-auto">Purchase</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Watch;
