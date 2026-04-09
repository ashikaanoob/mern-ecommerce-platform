import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function ProductDetails() {

  const { id } = useParams();
   const navigate = useNavigate();
  const [product, setProduct] = useState({});
 

  useEffect(() => {
    axios.get(`http://localhost:3000/viewProductId/${id}`)
      .then(res => {
        console.log(res.data.ProductSchema);
        setProduct(res.data.ProductSchema);
      });
  }, [id]);
  const handleBuyNow = () => {
    const userId = localStorage.getItem("userId");
   
    axios.post("http://localhost:3000/addOrder", {
      userId: userId,
      productId: product._id,
      name: product.name,
      price: product.price,
      
    })
    .then(res => {
      alert("Order placed successfully!");
      navigate("/Order");
    })
    .catch(err => {
      console.error("Error placing order:", err);
      alert("Failed to place order.");
    });
  };

  return (
  

    <div className="center-box">

      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>₹ {product.price}</p>
      <p>{product.category}</p>
      <p>{product.image && <img src={product.image} alt={product.name} />}</p>
<button className="btn btn-primary" onClick={ handleBuyNow}>Buy Now</button>

    </div>
  );
}

export default ProductDetails;