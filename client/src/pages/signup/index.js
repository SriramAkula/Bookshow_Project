import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./signup.module.scss";
import salaarBg from "../../assets/bb_pb.png";
import Button from "../../components/atoms/Button";
import { signupUser } from "../../apis/users";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (
        !formData.name ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        toast.error("Please fill all fields.");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match.");
        return;
      }

      const result = await signupUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      toast.success(result.data.result || "Signup successful!");
      navigate("/login");
    } catch (error) {
      const status = error?.response?.status;
      const message = error?.response?.data?.error || "Something went wrong";
      if (status === 409) {
        toast.error(message); 
      } else if (status === 400) {
        toast.error(message);
      } else {
        toast.error("Unexpected error. Please try again.");
        console.error(error);
      }
    }
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

          <Button text={"Sign Up"} className={styles.submitButton} />

          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;