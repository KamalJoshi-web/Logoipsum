import React from "react";
import { Logo } from "../index";

const FootLinks = () => {
  const links = [
    { name: "COMPANY", navs: ["About", "Pricing", "Careers"] },
    { name: "SOLUTIONS", navs: ["Search", "Connect", "Research", "Academy"] },
    { name: "RESOURCES", navs: ["Blogs", "Forms"] },
    { name: "SUPPORT", navs: ["Help", "Contact Us"] },
    { name: "LEGAL", navs: ["Privacy", "Terms", "Accessibility"] },
  ];

  return (
    <div className=" flex justify-around py-5 gap-3 flex-wrap max-md:flex-col max-md:items-center">
      <div>
        <Logo color={"invert"} />
        <p className=" text-white mt-3">
          India's first platform dedicated to <br /> simplifying partner search
        </p>
      </div>
      {links.map((item, index) => (
        <div key={index}>
          <h1 className=" font-bold text-white text-start max-md:text-center">
            {item.name}
          </h1>
          <ul>
            {item.navs.map((item, index) => (
              <li
                key={index}
                className="text-white font-light my-1 hover:opacity-80  text-start max-md:text-center"
              >
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FootLinks;
