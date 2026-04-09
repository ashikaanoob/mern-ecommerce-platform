import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavbarPage from "../components/NavbarPage";
function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/viewall")
      .then(res => {
       console.log(res.data);
        setProducts(res.data.ProductSchema);
        
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
<NavbarPage/>
      <h2 className="text-center mb-4">Our Products</h2>

      <div className="row">
        {products.map((p) => (
          <div className="col-md-4 mb-4" key={p._id}>
            
            <div className="card shadow h-100">

              <img
                src={p.image || "https://via.placeholder.com/300"}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
                alt=""
              />

              <div className="card-body d-flex flex-column">

                <h5>{p.name}</h5>
                <p className="text-muted">₹ {p.price}</p>

                <Link 
                  to={`/product/${p._id}`} 
                  className="btn btn-primary mt-auto"
                >
                  View
                </Link>
     </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Products;