import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import NavbarPage from "../components/NavbarPage";

function Home() {

  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/viewUserId/${id}`)
      .then(res => setUser(res.data.User));
  }, [id]);

  return (
    <>
      <NavbarPage userId={id} userName={user.firstName} />
      <div className="center-box">
        <h1>Welcome {user.firstName}</h1>
      </div>
    </>
  );
}

export default Home;