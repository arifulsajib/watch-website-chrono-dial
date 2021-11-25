import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import reviewBanner from "../../../Images/Banner/review-banner.png";

const AddReview = () => {
  const { user } = useAuth();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    data.name = user.displayName;
    data.email = user.email;

    fetch("https://pacific-scrubland-75606.herokuapp.com/addReview", {
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
      });
  };

  return (
    <div className="container py-5">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card">
            <div className="row g-0">
              <div className="col-md-6 col-lg-5 d-none bg-light d-md-flex align-items-center justify-content-center shadow-lg">
                <img src={reviewBanner} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black shadow-lg">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h5 className="fw-normal mb-3 pb-3">Add a Review</h5>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example27">
                        Rating: (1-5 No decimal)
                      </label>
                      <input
                        {...register("rating", { required: true })}
                        rows="4"
                        min="1"
                        max="5"
                        step="1"
                        onKeyPress={(event) => event.charCode >= 48 && event.charCode <= 57}
                        type="number"
                        id="form2Example27"
                        className="form-control form-control-lg"
                        placeholder="Rating"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example27">
                        Description: (Max 150 character)
                      </label>
                      <textarea {...register("description", { required: true })} rows="4" maxLength="150" type="text" id="form2Example27" className="form-control form-control-lg" placeholder="description" />
                    </div>

                    <div className="pt-1 mb-4">
                      <button className="btn btn-dark btn-lg btn-block" type="submit">
                        Add Review
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
  );
};

export default AddReview;
