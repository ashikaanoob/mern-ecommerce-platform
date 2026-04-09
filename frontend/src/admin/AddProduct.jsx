import React, { useState } from "react";
import axios from "axios";
import AdminNavbar from  "./AdminNavbar";
function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/add", form)
      .then(() => {
        alert("Product Added");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-4">
      <AdminNavbar />
      
      <h3>Add Product</h3>

      <form onSubmit={handleSubmit}>

        <input name="name" placeholder="Name" className="form-control mb-2" onChange={handleChange} />
        <input name="description" placeholder="Description" className="form-control mb-2" onChange={handleChange} />
        <input name="price" placeholder="Price" className="form-control mb-2" onChange={handleChange} />
        <input name="category" placeholder="Category" className="form-control mb-2" onChange={handleChange} />
        <input name="image" placeholder="Image URL" className="form-control mb-2" onChange={handleChange} />

        <button className="btn btn-success">Add</button>

      </form>
    </div>
  );
}

export default AddProduct;