import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./signup.module.scss";
import salaarBg from "../../assets/bb_pb.png";
import Button from "../../components/atoms/Button";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    navigate("/login")
  };

  return (
    <div className={styles.wrapper} style={{ backgroundImage: `url(${salaarBg})` }}>
      <div className={styles.signupContainer}>
        <form className={styles.signupForm} onSubmit={handleSubmit}>
          <h2>Create BookShow Account</h2>

          <div className={styles.inputGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              required
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm your password"
              required
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
          </div>

          <div className={styles.toggle}>
            <input
              type="checkbox"
              id="togglePassword"
              checked={showPassword}
              onChange={() => setShowPassword((prev) => !prev)}
            />
            <label htmlFor="togglePassword">Show Password</label>
          </div>
          
          <button type="submit" className={styles.submitButton}>
            Sign Up
          </button>
          {/* <Button text={"Sign Up"} clickhandler={() => navigate("/login")} /> */}

          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;