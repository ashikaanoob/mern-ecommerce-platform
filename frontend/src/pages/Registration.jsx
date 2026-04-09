import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";

function Registration() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    address: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/register", user)
      .then(() => {
        alert("Registration Successful ✅");
        navigate("/");
      })
      .catch(() => {
        alert("Registration Failed ❌");
      });
  };

  return (
    <div className="center-box">

      <h2>Registration</h2>

      <form onSubmit={handleSubmit} autoComplete="on">

        <input
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          required
          autoComplete="given-name"
        />

        <input
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          autoComplete="family-name"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          autoComplete="email"
        />

        <input
          type="tel"
          name="tel"
          placeholder="Phone"
          onChange={handleChange}
          autoComplete="tel"
        />

        <input
          name="address"
          placeholder="Address"
          onChange={handleChange}
          autoComplete="street-address"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          autoComplete="new-password"
        />

        <button className="theme-btn" type="submit">
          Register
        </button>

      </form>

      <p style={{ marginTop: "10px" }}>
        Already have an account? <Link to="/">Login</Link>
      </p>

    </div>
  );
}

export default Registration;