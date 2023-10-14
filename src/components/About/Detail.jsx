import React from "react";
import SearchIcon from "../../assets/search.svg";
import ConnectIcon from "../../assets/connect.svg";
import ResearchIcon from "../../assets/research.svg";
import AcademyIcon from "../../assets/academy.svg";

const Detail = () => {
  const services = [
    {
      icon: SearchIcon,
      name: "SEARCH",
      detail: " for vital company information",
    },
    {
      icon: ConnectIcon,
      name: "CONNECT",
      detail: "  with the resources to meet your business needs",
    },
    {
      icon: ResearchIcon,
      name: "RESEARCH",
      detail: "  and generate reports that drive growth",
    },
    {
      icon: AcademyIcon,
      name: "ACADEMY",
      detail: "  to give you the skills for success in your career",
    },
  ];

  return (
    <div className=" flex flex-col gap-10 w-2/4 max-md:w-full">
      <h2 className="text-5xl font-bold">
        <span className="custom-text-color"> All-in-One </span>
        platform <br /> that Makes Easier
      </h2>
      <p>
        We are more than a platform; We are your success partner. Discover our
        services to achieve your business and educational goals
      </p>
      <div className=" flex gap-5 flex-wrap">
        {services.map((item, index) => (
          <div key={index} className=" flex gap-3">
            <img src={item.icon} alt={`${item.icon}-icon`} />
            <h4>
              <strong>{item.name}</strong>
              {item.detail}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
