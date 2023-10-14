import React from "react";
import Detail from "./Detail";
import StuSlide from "./StuSlide";

const About = () => {
  return (
    <section className=" w-3/4 flex m-auto justify-around items-center max-md:flex-wrap-reverse my-20">
      <Detail />
      <StuSlide />
    </section>
  );
};

export default About;
