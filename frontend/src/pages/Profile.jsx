import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import NavbarPage from "../components/NavbarPage";
function Profile() {

  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/viewUserId/${id}`)

      .then(res => {
        console.log(res.data);
        setUser(res.data.User);
      });
  }, [id]);

  return (
  <>
  <NavbarPage />
    <div className="center-box">
  
      <h2>Profile</h2>

      <p>{user.firstName}</p>
      <p>{user.email}</p>
      <p>{user.tel}</p>
      <p>{user.address}</p>

      <Link to={`/editprofile/${id}`}>Edit</Link>

    </div>
  </>
  );
}

export default Profile;