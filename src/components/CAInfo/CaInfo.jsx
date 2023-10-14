import React from "react";
import RatingStar from "../../assets/rating.svg";
import Calender from "../../assets/calender.svg";
import Slides from "../../assets/slides.png";
import { Button } from "../../components/index";

const CaInfo = ({ ca }) => {
  return (
    <aside className=" flex flex-col gap-5 w-[33%] max-md:w-full items-start  max-md:items-center mb-5 ">
      {/* Personal Details */}
      <h2 className=" font-bold  text-3xl">{ca.name}</h2>
      <p className=" text-xl text-start max-md:text-center ">{ca.intro}</p>
      <span className=" text-xl flex gap-1 ">
        <img src={RatingStar} alt="Rating" />
        <h4 className="font-bold text-blue ">{ca.rating}</h4>
        <h5>{`(${ca.reviewCount})`}</h5>
      </span>
      {/* PostCard */}
      <div className=" shadow-md w-80 px-2 py-5 flex gap-5 flex-col  rounded-md">
        <div className=" flex justify-between">
          <p className="text-xl">{ca.taskComplexity}</p>
          <h5 className=" text-xl font-bold">{ca.price}</h5>
        </div>
        <span className="text-xl flex gap-3">
          <img src={Calender} alt="Calender" />
          <p>{ca.deliveryTime}</p>
        </span>
        <div className="  gap-5  inline-flex">
          <Button color=" text-white" bgColor="bg-blue" className=" px-[5px]">
            Request Proposal
          </Button>
          <Button className=" px-[5px]">Chat with me</Button>
        </div>
      </div>
      {/* Testimonials */}
      <div className="shadow-md  w-80 px-2 py-5 flex gap-5 flex-col rounded-md">
        <h1 className="font-bold  text-3xl"> What people say?</h1>
        <p className=" text-xl">{ca.testimonial.text}</p>
        <img src={Slides} alt="Slides" className=" block m-auto" />
      </div>
    </aside>
  );
};

export default CaInfo;
