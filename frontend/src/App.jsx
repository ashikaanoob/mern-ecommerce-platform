import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Admin from "./admin/Admin";
import AddProduct from "./admin/AddProduct";
import AdminProducts from "./admin/AdminProducts";
import EditProduct from "./admin/EditProduct";
import AdminOrder from "./admin/AdminOrder";
import Registration from "./pages/Registration";
import ForgotPassword from "./pages/ForgotPassword";
import Order from "./pages/Order";
import DeleteProduct from "./admin/DeleteProduct";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/home/:id" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/editprofile/:id" element={<EditProfile />} />
         <Route path="/admin" element={<Admin />} />
  <Route path="/admin/Addproduct" element={<AddProduct />} />
  <Route path="/admin/Adminproducts" element={<AdminProducts />} />
  <Route path="/admin/Editproduct/:id" element={<EditProduct />} />
  <Route path="/admin/AdminOrder" element={<AdminOrder />} />
  <Route path="/registration" element={<Registration />} />
  <Route path="/forgotpassword" element={<ForgotPassword />} />
  <Route path="/order" element={<Order />} />
  <Route path="/admin/DeleteProduct/:id" element={<DeleteProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;