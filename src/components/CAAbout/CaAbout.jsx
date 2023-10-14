import React from "react";

const CaAbout = ({ ca }) => {
  return (
    <aside className=" bg-lightGray max-w-xl max-md:w-full rounded-lg shadow flex-col flex gap-5 flex-wrap  pb-5">
      {/* Ca Cover Letter */}
      <img src={ca.image} alt={ca.name} className=" rounded-lg w-full" />
      <h2 className=" text-3xl font-bold px-5">About {ca.name}</h2>
      {/* Background */}
      <div className=" flex flex-wrap justify-between px-5  ">
        <span>
          <h5 className=" uppercase text-gray font-bold">from</h5>
          <p>{ca.about.from}</p>
        </span>
        <span>
          <h5 className=" uppercase text-gray font-bold">partner Since</h5>
          <p>{ca.about.partnerSince}</p>
        </span>
        <span>
          <h5 className=" uppercase text-gray font-bold">
            average Response Time
          </h5>
          <p>{ca.about.averageResponseTime}</p>
        </span>
      </div>
      {/* About */}
      <div className=" px-5">
        <h5 className=" uppercase text-gray font-bold">about</h5>
        <p>{ca.about.description}</p>
      </div>
      {/* Services */}
      <div className=" flex justify-between flex-wrap px-5">
        <div>
          <h5 className=" uppercase text-gray font-bold">SERVICES I OFFER</h5>
          <ul>
            {ca.about.services.map((item, index) => (
              <li key={index} className=" list-disc">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className=" uppercase text-gray font-bold">why me?</h5>
          <ul>
            {ca.about.benefits.map((item, index) => (
              <li key={index} className=" list-disc">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default CaAbout;
