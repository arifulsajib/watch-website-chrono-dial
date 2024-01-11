import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import orderBanner from "../../Images/Banner/order-banner.jpg";

const PlaceOrder = () => {
  const { watchId } = useParams();
  const [watch, setWatch] = useState({});
  const { user } = useAuth();
  const history = useHistory();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    data.watchName = watch.name;
    data.watchId = watchId;
    data.status = "pending";
    data.orderDate = new Date().toLocaleDateString();

    fetch("https://chrono-dial-server.onrender.com/placeOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Order Placed Successfully");
        }
        reset();
        history.push("/dashboard/myorders");
      });
  };

  useEffect(() => {
    fetch(`https://chrono-dial-server.onrender.com/watchCollection/${watchId}`)
      .then((res) => res.json())
      .then((data) => setWatch(data));
  }, [watchId]);

  return (
    <div>
      <div className="service-detail container my-5 border bg-light shadow-lg rounded-3">
        <div className="row gy-5">
          <div className="col-12 col-md-5">
            <div className="p-3">
              <img className="w-100" src={watch?.pic} alt="" height="350" />
            </div>
          </div>
          <div className="col-12 col-md-7">
            <div className="p-3">
              <h2 className="fw-extrabold blue-color">{watch?.name}</h2>
              <h6 className="mb-3">
                <i className="fab fa-bandcamp blue-color"></i> Brand: {watch?.brand}
              </h6>
              <h6 className="mb-3">
                <i className="fas fa-comment-dollar blue-color"></i> Price: {watch?.price}$
              </h6>
              <p className="fs-5">{watch?.details}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Place order */}
      <div className="container mb-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none bg-light d-md-flex align-items-center justify-content-center shadow-md">
                  <img src={orderBanner} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black shadow-lg">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <h5 className="fw-normal mb-3 pb-3">Enter Shipping Info</h5>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="name">
                          Name
                        </label>
                        <input {...register("name", { required: true })} placeholder="Name" id="name" defaultValue={user?.displayName} type="text" className="form-control" />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example27">
                          Email
                        </label>
                        <input readOnly {...register("email", { required: true })} placeholder="Email" defaultValue={user?.email} type="email" id="form2Example27" className="form-control" />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example28">
                          Address
                        </label>
                        <input {...register("address", { required: true })} placeholder="Address" type="text" id="form2Example28" className="form-control" />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example29">
                          Phone No
                        </label>
                        <input {...register("phone", { required: true })} placeholder="Phone No" type="number" id="form2Example29" className="form-control" />
                      </div>

                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="submit">
                          Place Order
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
