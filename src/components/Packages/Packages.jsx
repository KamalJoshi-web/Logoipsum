import React from "react";
import Heading from "./Heading";
import Plans from "./Plans";
import Note from "./Note";
import Vector from "../../assets/vector1.svg";
const Packages = () => {
  return (
    <section>
      <div
        className=" justify-center  bg-no-repeat bg-cover py-1 mb-5 "
        style={{ backgroundImage: `url(${Vector})` }}
      >
        <Heading />
        <Plans />
      </div>
      <Note />
    </section>
  );
};

export default Packages;
