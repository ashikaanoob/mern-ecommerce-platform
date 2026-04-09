import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
function EditProduct() {
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: ""
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/viewProductId/${id}`)
    
      .then(res => {
        console.log(res.data);

         setForm(res.data.ProductSchema);

      console.log("Fetched product data:", res.data);
      })

      .catch(err => console.log(err));


  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3000/viewProductIdandUpdate/${id}`, form)
      .then(() => {
        alert("Product Updated");
      })
      .catch(err => console.log(err));



}

  return (
    <div className="container mt-4">
      <AdminNavbar />
      <h3>Edit Product</h3>

      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} placeholder={form.name} className="form-control mb-2" onChange={handleChange} />
        <input name="description" value={form.description} placeholder={form.description} className="form-control mb-2" onChange={handleChange} />
        <input name="price" value={form.price} placeholder={form.price} className="form-control mb-2" onChange={handleChange} />
        <input name="category" value={form.category} placeholder={form.category} className="form-control mb-2" onChange={handleChange} />
        <input name="image" value={form.image} placeholder={form.image} className="form-control mb-2" onChange={handleChange} />

        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}

export default EditProduct;