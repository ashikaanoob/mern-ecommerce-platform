import React  from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
function Admin() {
  const [orders, setOrders] = useState([]);
const [users, setUsers] = useState([]);
 const [products, setProducts] = useState([]);
 useEffect(() => {
    axios.get(`http://localhost:3000/viewallOrders`)
      .then(res => {
       console.log(res.data);
        setOrders(res.data.OrderSchema.length);
        
      })
      .catch(err => console.log(err));
  }, []);




 useEffect(() => {
    axios.get(`http://localhost:3000/viewallusers`)
      .then(res => {
       console.log(res.data);
        setUsers(res.data.User.length);
        
      })
      .catch(err => console.log(err));
  }, []);
  

  useEffect(() => {
    axios.get("http://localhost:3000/viewall")
      .then(res => {
       console.log(res.data);
        setProducts(res.data.ProductSchema.length);
        
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <AdminNavbar />
    <div className="container mt-4">

      <h2 className="text-center mb-4">Admin Panel</h2>
<h1> Total Users: {users} </h1>
<h1> Total Orders: {orders} </h1>
<h1> Total Products: {products} </h1>
    </div>
    </>
  );
}

export default Admin;