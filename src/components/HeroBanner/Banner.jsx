import React from "react";
import Info from "./Info";
import Vectors from "./Vectors";

const Banner = () => {
  return (
    <section
      className=" flex justify-around items-center flex-wrap-reverse py-5 
    custom-bg-color rounded-br-[70%] max-md:rounded-br-[0%] "
    >
      <Info />
      <Vectors />
    </section>
  );
};

export default Banner;
