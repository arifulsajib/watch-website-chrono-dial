import React from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import addProductBanner from "../../../Images/Banner/add-product-banner.png";

const AddProduct = () => {
  const { user } = useAuth();
  const history = useHistory();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    data.addedBy = user.email;
    console.log(data);

    fetch("https://chrono-dial-server.onrender.com/addProduct", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Added Successful");
        }
        reset();
        history.push("/dashboard/manageProducts");
      });
  };

  return (
    <div>
      <h2 className="text-center blue-color">Add a New Product</h2>
      <div className="container mb-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none bg-light d-md-flex align-items-center justify-content-center shadow-md">
                  <img src={addProductBanner} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black shadow-lg">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <h5 className="fw-normal mb-3 pb-3">Enter Product Info</h5>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="name">
                          Product Name
                        </label>
                        <input {...register("name", { required: true })} placeholder="Name" id="name" type="text" className="form-control" />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example27">
                          Brand
                        </label>
                        <input {...register("brand", { required: true })} placeholder="Brand" type="text" id="form2Example27" className="form-control" />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example28">
                          Price
                        </label>
                        <input {...register("price", { required: true })} placeholder="Price" type="number" id="form2Example28" className="form-control" />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example29">
                          Details
                        </label>
                        <textarea {...register("details", { required: true })} rows="4" placeholder="details" type="text" id="form2Example29" className="form-control" />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example30">
                          Pic Url
                        </label>
                        <input {...register("pic", { required: true })} placeholder="Pic Url" type="text" id="form2Example30" className="form-control" />
                      </div>

                      <div className="pt-1 mb-2">
                        <button className="btn btn-dark btn-lg btn-block" type="submit">
                          Add Product
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

export default AddProduct;
