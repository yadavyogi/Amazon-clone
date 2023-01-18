import React from "react";
import "./footer.css";
import Logo from "../../images/logo.jpg";

const Footer = () => {
  return (
    <footer>
      <span>
        Copyright © 2023 <img src={Logo} alt="logo" /> clone All Rights
        Reserved.
      </span>
      
    </footer>
  );
};

export default Footer;
