import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./login.module.scss";
import Logo from "../../../assets/logo.png";
// import Thor from "../../../assets/Thor.png";
import Rebel from "../../../assets/rebel.png";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    navigate("/");
  };

  return (
    <div className={styles.wrapper} style={{ backgroundImage: `url(${Rebel})` }}>
      {/* Column 1: Login Form */}
      <div className={styles.loginContainer}>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <h2>
            Login to <img src={Logo} alt="Logo" className={styles.logo} />
          </h2>

          <input
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <button type="submit" className={styles.submitButton}>
            Login
          </button>

          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>

      {/* Column 2: Welcome Text */}
      <div className={styles.welcomeContainer}>
        <h1 className={styles.welcomeTitle}>YOUR JOURNEY BEIGINS</h1>
        <p className={styles.welcomeSubtitle}>
          Enter the universe of endless stories with BookShow.
        </p>
      </div>
    </div>
  );
};

export default Login;