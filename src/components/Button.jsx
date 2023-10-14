import React from "react";

const Button = ({
  children,
  color = "text-blue",
  bgColor = "bg-white",
  outline = "border-blue",
  className = "",
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={` border rounded-lg px-5 py-2 font-medium hover:opacity-80 ${color} ${bgColor}  ${outline}  ${className} `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
