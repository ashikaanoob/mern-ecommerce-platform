import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavbarPage from "../components/NavbarPage";
import AdminNavbar from "./AdminNavbar";
function AdminOrder() {
    const [orders, setOrders] = useState([]);
    const userId = localStorage.getItem("userId");
 useEffect(() => {
    axios.get(`http://localhost:3000/viewallOrders`)
      .then(res => {
       console.log(res.data);
        setOrders(res.data.OrderSchema);
        
      })
      .catch(err => console.log(err));
  }, []);

    return (
       <>
  <AdminNavbar />

  <div className="container mt-4">
    <h2 className="text-center mb-4">Orders</h2>

    <div className="row">
      {orders.map((o) => (
        <div className="col-md-4 mb-4" key={o._id}>

          <div className="card p-3 shadow">

            <h5>{o.name}</h5>

            <p>name: {o.productId?.name}</p>
            <p>price: {o.productId?.price}</p>
            <p>category: {o.productId?.category}</p>
            <p>Description: {o.productId?.description}</p>

          </div>

        </div>
      ))}
    </div>
  </div>
</>
    )
}

export default AdminOrder
