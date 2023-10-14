import React, { useState } from "react";
import { Button, Logo } from "../index";
import NavigationLinks from "./NavigationLinks";
import Hamburger from "./Hamburger";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className=" flex justify-around items-center py-5  custom-bg-color ">
      {/* Logo & Links */}
      <div className=" flex gap-8 flex-wrap">
        <Logo />
        <NavigationLinks isOpen={isOpen} />
      </div>
      {/* Button Group */}
      <div className=" flex gap-3 max-md:hidden">
        <Button>Login</Button>
        <Button color="text-white" bgColor="bg-blue">
          Register
        </Button>
      </div>
      {/* MenuToggle */}
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Navbar;
