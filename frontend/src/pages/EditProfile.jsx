import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import NavbarPage from "../components/NavbarPage";
function EditProfile() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName:"",
    email:"",
    tel:"",
    address:""
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/viewUserId/${id}`)
      .then(res => setForm(res.data.User));
  }, [id]);

  const update = () => {
    axios.put(`http://localhost:3000/userIdandUpdate/${id}`, form)
      .then(() => {
        alert("Updated");
        navigate(`/profile/${id}`);
      });
  };

  return (
    <>
    <NavbarPage />
    <div className="center-box">

      <input value={form.firstName || ""} onChange={(e)=>setForm({...form, firstName:e.target.value})}/>
      <input value={form.email || ""} onChange={(e)=>setForm({...form, email:e.target.value})}/>
      <input value={form.tel || ""} onChange={(e)=>setForm({...form, tel:e.target.value})}/>
      <input value={form.address || ""} onChange={(e)=>setForm({...form, address:e.target.value})}/>

      <button onClick={update}>Save</button>

    </div>
    </>
  );
}

export default EditProfile;