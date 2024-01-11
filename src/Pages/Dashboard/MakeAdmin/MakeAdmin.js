import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleAdminSubmit = (email) => {
    const url = `https://chrono-dial-server.onrender.com/users/makeAdmin/${email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Admin added Successfully");
        } else {
          alert("Something went wrong! Check email again");
        }
      });
  };

  return (
    <div>
      <h2 className="blue-color text-center">Make A Admin</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-outline mb-3">
          <label className="form-label fs-5" htmlFor="form2Example17">
            Enter Email
          </label>
          <input onBlur={(e) => setEmail(e.target.value)} type="email" id="form2Example17" className="form-control form-control-lg w-75" placeholder="Email" />
        </div>

        <div className="pt-1 mb-4">
          <button onClick={() => handleAdminSubmit(email)} className="default-btn" type="submit">
            Make Admin
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
