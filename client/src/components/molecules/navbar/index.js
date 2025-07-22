////index.js

import { Icon } from "@iconify/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import BrandLogo from "../../../assets/logo.png";
import styles from "./navbar.module.scss";
import Button from "../../atoms/Button";

function Navbar() {
  const navigate=useNavigate();
  const handleLogin = () => {
    console.log("Login Clicked");
    navigate('/login')
  };

  return (
    <article className={styles.navbar}>
      {/* Left */}
      <img src={BrandLogo} alt="BookShow" />

      {/* Middle */}
      <nav className={styles.nav}>
        {/* <a>Home</a> */}
        <Link to="/">Home</Link>
        {/* <a>Movies</a> */}
        <Link to="/movies">Movies</Link>
        <a>Theaters</a>
        <a>Releases</a>
      </nav>

      {/* Right */}
      <div className={styles.right}>
        <Icon icon={"ic:outline-search"} />
        <Button text="Log In" clickHandler={handleLogin} />
      </div>
    </article>
  );
}

export default Navbar;
