import React from "react";
import PackageCard from "./PackageCard";
import Note from "./Note";

const Plans = () => {
  const packages = [
    {
      serialNo: "01",
      plan: "Commencement of business ",
      planDetails:
        "Invested shareholders must confirm payment and office address",
      dueDate: "Within 180 days",
      penalty: "₹50,000 for the company ₹1,000 /day for directors",
    },
    {
      serialNo: "02",
      plan: "Auditor Appointment ",
      planDetails: "Company informs new auditor and submits ADT.1 form to ROC.",
      dueDate: "Within 30 days",
      penalty: "₹300 per month.",
    },
    {
      serialNo: "03",
      plan: "DIN eKYC ",
      planDetails:
        "Directors share personal information for identification & verification",
      dueDate: "Every Year",
      penalty: "₹5000 one time",
    },
    {
      serialNo: "04",
      plan: "DPT-3 ",
      planDetails:
        "Companies report money taken from people to ROC; auditors confirm details.",
      dueDate: "Within 30 days",
      penalty: "₹300 per month.",
    },
    {
      serialNo: "05",
      plan: "MCA Form AOC-4 ",
      planDetails:
        "It's like an official report card for a company's documents",
      dueDate: "On or Before 30th November",
      penalty: "₹200 per day (No upper limit)*",
    },
    {
      serialNo: "06",
      plan: "MCA Form MGT-7 ",
      planDetails:
        "Companies must annually report activities and finances to the registrar.",
      dueDate: "On or Before 31st December",
      penalty: "₹200 per day (No upper limit)*",
    },
  ];

  return (
    <div className=" flex  w-3/4 m-auto flex-wrap gap-8  max-lg:justify-center my-20 ">
      {packages.map((item, index) => (
        <PackageCard
          key={index}
          serialNo={item.serialNo}
          plan={item.plan}
          planDetails={item.planDetails}
          dueDate={item.dueDate}
          penalty={item.penalty}
        />
      ))}
    </div>
  );
};

export default Plans;
