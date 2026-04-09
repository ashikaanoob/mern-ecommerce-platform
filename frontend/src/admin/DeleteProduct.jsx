import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";

function DeleteProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
   axios.get(`http://localhost:3000/viewProductId/${id}`)
      .then(res => setProduct(res.data.ProductSchema))
      .catch(err => console.log(err));
  }, [id]);

  const handleDelete = () => {
    axios.post(`http://localhost:3000/deleteProductById/${id}`)
      .then(() => {
        alert("Deleted successfully");
        navigate("/admin/Adminproducts");
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <AdminNavbar />
      <div className="center-box">
        <h3>Delete Product</h3>

        <p><strong>{product.name}</strong></p>
        <p>₹ {product.price}</p>

        <button className="btn btn-danger" onClick={handleDelete}>
          Confirm Delete
        </button>

        <button 
          className="btn btn-secondary mt-2"
          onClick={() => navigate("/admin/Adminproducts")}
        >
          Cancel
        </button>
      </div>
    </>
  );
}

export default DeleteProduct;