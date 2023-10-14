import React from "react";

const PackageCard = ({ serialNo, plan, planDetails, dueDate, penalty }) => {
  return (
    <div className=" max-w-xs relative bg-white shadow-lg p-2">
      <div className=" rounded-md  w-fit custom-bg-color-dark">
        <h3 className=" text-white font-bold p-1">{serialNo}</h3>
      </div>
      <h2 className=" font-bold text-center">{plan}</h2>
      <p className=" text-center">{planDetails}</p>
      <div className=" bg-lightGray rounded-md flex gap-5 p-1   justify-center">
        <div>
          <span className=" text-blue font-bold">Due Date</span>
          <p>{dueDate}</p>
        </div>
        <div>
          <span className=" text-lightRed font-bold">Penalty fees</span>
          <p>{penalty}</p>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
