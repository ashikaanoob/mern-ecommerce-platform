import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

function AdminProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/viewall")
      .then(res => {
        console.log(res.data);
        setProducts(res.data.ProductSchema);
      })
      .catch(err => console.log(err));
  }, []);

  const deleteProduct = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");

    if (!confirmDelete) return;

   axios.delete(`http://localhost:3000/deleteProductById/${id}`)
      .then(() => {
        alert("Deleted successfully ✅");

        // safer state update
        setProducts(prev => prev.filter(p => p._id !== id));
      })
      .catch(err => {
        console.log(err);
        alert("Delete failed ❌");
      });
  };

  return (
    <>
      <AdminNavbar />

      <div className="container mt-4">
        <h2 className="text-center mb-4">All Products</h2>

        <div className="row">
          {products.map(p => (
            <div className="col-md-4 mb-4" key={p._id}>

              <div className="card shadow h-100">

                <img
                  src={p.image || "https://via.placeholder.com/300"}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                  alt={p.name}
                />

                <div className="card-body d-flex flex-column">

                  <h5>{p.name}</h5>
                  <p className="text-muted">₹ {p.price}</p>

                  <div className="mt-auto d-flex justify-content-between">

                    <Link
                      to={`/admin/Editproduct/${p._id}`}
                      className="btn btn-primary btn-sm w-50 me-2"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => deleteProduct(p._id)}
                      className="btn btn-danger btn-sm w-50"
                    >
                      🗑 Delete
                    </button>

                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default AdminProducts;