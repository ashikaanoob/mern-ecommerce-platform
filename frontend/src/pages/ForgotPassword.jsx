import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {

  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    // ✅ If not logged in → redirect
    if (!userId) {
      alert("Please login first ❗");
      navigate("/");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("userId");

    axios.post(`http://localhost:3000/userForgotPasswordById/${userId}`, {
      password
    })
    .then((res) => {
      console.log(res.data);

      alert("Password updated successfully ✅");

      // ✅ logout after reset
      localStorage.removeItem("userId");
      localStorage.removeItem("userName");

      navigate("/");
    })
    .catch((err) => {
      console.log(err);
      alert("Failed to update password ❌");
    });
  };

  return (
    <div className="center-box">

      <h2>Reset Password</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="password"
          placeholder="Enter New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="new-password"
        />

        <button className="theme-btn" type="submit">
          Update Password
        </button>

      </form>

    </div>
  );
}

export default ForgotPassword;