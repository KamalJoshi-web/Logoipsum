import React from "react";
import FootLinks from "./FootLinks";
import Socials from "./Socials";

const Foot = () => {
  return (
    <footer>
      <div className="custom-bg-color-dark ">
        <FootLinks />
        <Socials />
      </div>
      <div className=" w-full bg-black">
        <p className=" text-white font-light text-center py-3">
          Registered trademark of India Private Limited © 2023 loerumipsum Inc.
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Foot;
