import React, { useState } from "react";
import { Button } from "../index";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SearchForm = () => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    if (input === "") {
      toast.error("Please enter name to proceed forward");
    } else {
      navigate(`/cadetails/${input}`);
    }
  };

  return (
    <form className=" mx-0 max-md:mx-1" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search by name"
        value={input}
        className=" rounded-lg px-5 py-2 font-bold border border-gray   focus:outline-blue"
        onChange={(e) => setInput(e.target.value)}
      />

      <Button
        color="text-white"
        bgColor="bg-blue"
        className=" relative right-3"
        type=" submit"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
