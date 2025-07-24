import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router";

import styles from "./login.module.scss";
import Logo from "../../assets/logo.png";
import Button from "../../components/atoms/Button";
// import Rebel from "../../assets/rebel.png";
import Spidey from "../../assets/spidey.png";

import { loginUser } from "../../apis/users";
import { toast } from "react-toastify";
import fetchUser from "../../store/actions/user.actions";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("Login Data:", formData);
      if (formData.email === "" || formData.password === "") return;

      const result = await loginUser(formData);
      toast.success(result.data.result);
      dispatch(fetchUser());
      navigate("/");
    } catch (error) {
      const status = error?.response?.status;
      const message = error?.response?.data?.error || "Something went wrong";

      if (status === 404) {
        toast.error(message);
        navigate("/signup");
      } else if (status === 401 || status === 400) {
        toast.error(message);
      } else {
        toast.error("Unexpected error. Please try again.");
        console.error(error);
      }
    }

};


  return (
    <div className={styles.wrapper} style={{ backgroundImage: `url(${Spidey})` }}>
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

          {/* <button type="submit" className={styles.submitButton}>
            Login
          </button> */}

          <Button text={"Login"} className={styles.submitButton}/>

          <p>
            Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
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