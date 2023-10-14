import React, { useEffect, useState } from "react";
import { Loading, Error, Button } from "../index";
import axios from "axios";
import Star from "../../assets/rating.svg";

const RecommendedCa = () => {
  const [recommendedCa, setRecommendedCa] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCAData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://fake-api-v2ck.onrender.com/CADetails"
        );
        setRecommendedCa(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fetchCAData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error errorMsg={error} />;
  }

  return (
    <div className=" my-20">
      <h2 className=" text-3xl font-bold ml-10 mb-5">Recommended for you</h2>
      <div className=" flex flex-wrap gap-10  justify-center  items-start">
        {recommendedCa.slice(5, 8).map((item, index) => (
          <div key={index} className=" w-80 rounded-md shadow-lg max-md:w-64">
            <img
              src={item.image}
              alt="failed to load Image"
              className=" rounded-md rounded-t"
            />
            <div className=" px-2 py-3 ">
              <h1 className=" text-xl font-bold">{item.name}</h1>
              <p>{item.intro}</p>
              <span className=" text-xl flex gap-1 mt-2 ">
                <img src={Star} alt="Rating" />
                <h4 className="font-bold text-blue ">{item.rating}</h4>
                <h5>{`(${item.reviewCount})`}</h5>
              </span>
              <Button
                color="text-white"
                bgColor=" bg-blue"
                className=" w-full mt-5"
              >
                View services
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCa;
