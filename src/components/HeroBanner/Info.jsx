import React from "react";
import SearchForm from "./SearchForm";

const Info = () => {
  return (
    <div>
      <h1 className=" text-5xl font-bold mb-5 text-start max-md:text-center">
        Find <span className="custom-text-color">Partners</span> (CAs) <br />{" "}
        available online
      </h1>
      <p className=" text-gray mb-10 text-start max-md:text-center">
        <strong> CONNECT </strong> with us where your services are listed and
        visible to a myriad <br /> of businesses seeking CA’s for compliance
        support
      </p>
      <SearchForm />
    </div>
  );
};

export default Info;
