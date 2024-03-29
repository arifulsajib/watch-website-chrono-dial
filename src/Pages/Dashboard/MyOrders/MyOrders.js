import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [control, setControl] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://chrono-dial-server.onrender.com/orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, [control]);

  const handleDelete = (id) => {
    const checker = window.confirm("Are you sure to delete?");
    if (checker) {
      fetch(`https://chrono-dial-server.onrender.com/deleteOrder/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Cancelled Successfully");
            setControl(!control);
          } else {
            setControl(false);
          }
        });
    }
  };

  return (
    <div className="container">
      <h2 className="text-center blue-color">My Orders</h2>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Watch Name</th>
            <th>Ordered by</th>
            <th>Order Date</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {isLoading ? ( //Checkif if is loading
          <tbody>
            <tr>
              <td colSpan="8">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </td>
            </tr>
          </tbody>
        ) : (
          orders?.map((order, index) => (
            <tbody key={order?._id}>
              <tr>
                <td>{index}</td>
                <td>{order.watchName}</td>
                <td>{order.email}</td>
                <td>{order.orderDate}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
                <td>{order.status}</td>
                <td>
                  <button onClick={() => handleDelete(order._id)} className="btn btn-danger btn-sm">
                    Cancel
                  </button>
                </td>
              </tr>
            </tbody>
          ))
        )}
      </Table>
    </div>
  );
};

export default MyOrders;
