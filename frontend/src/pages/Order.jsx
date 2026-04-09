import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarPage from "../components/NavbarPage";

function Order() {

  const [orders, setOrders] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {

    if (!userId) return;

    axios.get(`http://localhost:3000/viewUserOrders/${userId}`)
      .then(res => {
        console.log(res.data);
        setOrders(res.data.orders);
      })
      .catch(err => console.log(err));
  }, [userId]);

  return (
    <>
      <NavbarPage />

      <div className="container mt-4">
        <h2 className="text-center mb-4">My Orders</h2>

        <div className="row">
          {orders.map((o) => (
            <div className="col-md-4 mb-4" key={o._id}>

              <div className="card p-3 shadow">

                <h5>{o.name}</h5>

                <p>name: {o.productId?.name || "Product not available"}</p>
                <p>price: {o.productId?.price || "-"}</p>
                <p>category: {o.productId?.category || "-"}</p>
                <p>Description: {o.productId?.description || "-"}</p>

              </div>

            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default Order;