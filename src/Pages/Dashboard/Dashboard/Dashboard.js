import React from "react";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import AddProduct from "../AddProduct/AddProduct";
import AddReview from "../AddReview/AddReview";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyOrders from "../MyOrders/MyOrders";
import PayOrder from "../PayOrder/PayOrder";
import "./Dashboard.css";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin, logOut } = useAuth();

  const activeStyle = {
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#444443"
  };
  return (
    <>
      <div className="">
        <div className="sidebar">
          {admin ? (
            <>
              <NavLink activeStyle={activeStyle} exact to={`${url}/payOrder`}>
                Pay
              </NavLink>
              <NavLink activeStyle={activeStyle} exact to={`${url}/myorders`}>
                My Orders
              </NavLink>
              <NavLink activeStyle={activeStyle} exact to={`${url}/addReview`}>
                Add Review
              </NavLink>
              <NavLink activeStyle={activeStyle} exact to={`${url}/makeAdmin`}>
                Make Admin
              </NavLink>
              <NavLink activeStyle={activeStyle} exact to={`${url}/manageAllOrders`}>
                Manage All Orders
              </NavLink>
              <NavLink activeStyle={activeStyle} exact to={`${url}/addProduct`}>
                Add Product
              </NavLink>
              <NavLink activeStyle={activeStyle} exact to={`${url}/manageProducts`}>
                Manage Products
              </NavLink>
              <button onClick={logOut} className="logout-btn btn btn-secondary text-center ms-2 mt-3">
                <i className="fas fa-sign-out-alt mx-auto"></i> Logout
              </button>
            </>
          ) : (
            <>
              <NavLink activeStyle={activeStyle} exact to={`${url}/payOrder`}>
                Pay
              </NavLink>
              <NavLink activeStyle={activeStyle} exact to={`${url}/myorders`}>
                My Orders
              </NavLink>
              <NavLink activeStyle={activeStyle} exact to={`${url}/addReview`}>
                Add Review
              </NavLink>
              <button onClick={logOut} className="logout-btn btn btn-secondary text-center ms-2 mt-2">
                <i className="fas fa-sign-out-alt mx-auto"></i> Logout
              </button>
            </>
          )}
        </div>

        <div className="content">
          <Switch>
            <Route exact path={path}>
              <DashboardHome></DashboardHome>
            </Route>
            <Route path={`${path}/myorders`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/addReview`}>
              <AddReview></AddReview>
            </Route>
            <Route path={`${path}/payOrder`}>
              <PayOrder></PayOrder>
            </Route>

            <AdminRoute path={`${path}/manageAllOrders`}>
              <ManageAllOrders></ManageAllOrders>
            </AdminRoute>
            <AdminRoute path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/manageProducts`}>
              <ManageProducts></ManageProducts>
            </AdminRoute>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
