import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      navigate(`/home/${userId}`);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    axios.post("http://localhost:3000/login", { email, password })
      .then((res) => {

        if (res.data && res.data.User) {

          alert("Login Successful ✅");

     
          localStorage.setItem("userId", res.data.User._id);
          localStorage.setItem("userName", res.data.User.firstName);

          setEmail("");
          setPassword("");

       
          navigate(`/home/${res.data.User._id}`);

        } else {
          alert("Invalid response");
        }

      })
      .catch((err) => {
        alert(err.response?.data?.message || "Login Failed ❌");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="center-box">

      <h2>Login</h2>

      <form onSubmit={handleLogin} autoComplete="off">

        {/* 🔥 Hidden inputs to disable Chrome autofill */}
        <input type="text" name="fakeuser" style={{ display: "none" }} />
        <input type="password" name="fakepass" style={{ display: "none" }} />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
          required
        />

        <button className="theme-btn" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>

      <p style={{ marginTop: "10px" }}>
        New user? <Link to="/registration">Register here</Link>
      </p>

      <p>
        <Link to="/forgotpassword">Forgot Password?</Link>
      </p>

    </div>
  );
}

export default Login;