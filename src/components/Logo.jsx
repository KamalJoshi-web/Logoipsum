import React from "react";
import IconLogo from "../assets/logo.svg";

const Logo = ({ color, className = "", ...props }) => {
  return (
    <img
      src={IconLogo}
      alt="logo"
      className={`${color} ${className}`}
      {...props}
    />
  );
};

export default Logo;
