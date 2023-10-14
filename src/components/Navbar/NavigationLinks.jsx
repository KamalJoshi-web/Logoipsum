import React from "react";
import ArrowDown from "../../assets/downarrow.svg";
import { Button } from "../index";

const NavigationLinks = ({ isOpen }) => {
  const links = [
    { name: "solution", icon: ArrowDown },
    { name: "features", icon: ArrowDown },
    { name: "blog", icon: null },
    { name: "about", icon: ArrowDown },
  ];

  const responsiveClasses =
    "max-md:flex-col max-md:absolute max-md:bg-white max-md:shadow-2xl max-md:w-56 max-md:justify-center max-md:items-center max-md:p-2 max-md:rounded-xl max-md:-right-2   ";

  return (
    <ul
      className={`flex gap-8 ${responsiveClasses} ${
        isOpen
          ? " max-md:invisible"
          : " duration-200 max-md:top-20 max-md:visible max-md:right-2  max-md:w-64 "
      }    `}
    >
      {links.map((item, index) => (
        <li key={index} className="  flex items-center hover:opacity-80">
          <a href="#" className=" capitalize font-semibold">
            {item.name}
          </a>
          <img
            src={item.icon}
            alt="Down Arrow"
            className={item.icon ? item.icon : "hidden"}
          />
        </li>
      ))}
      <div className=" flex-col hidden max-md:flex">
        <Button>Login</Button>
        <br />
        <Button color="text-white" bgColor="bg-blue" className="my-1">
          Register
        </Button>
      </div>
    </ul>
  );
};

export default NavigationLinks;
