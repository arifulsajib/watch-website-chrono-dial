import React from "react";
import "./DashboardHome.css";
import bgDashboard from "../../../Images/background/bg-dashboard.jpg";

const DashboardHome = () => {
  return (
    <div className="dashboard-home d-flex justify-content-center align-items-center">
      <img src={bgDashboard} className="img-fluid" alt="" />
    </div>
  );
};

export default DashboardHome;
