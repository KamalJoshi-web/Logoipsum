import React from "react";

const Error = ({ errorMsg }) => {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-5">
      <h1 className=" text-3xl text-center font-extrabold  text-lightRed">
        Oops! Failed To Load Data
      </h1>
      <p className="text-2xl text-center font-bold text-blue">{errorMsg}</p>
    </div>
  );
};

export default Error;
