import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  CaInfo,
  CaAbout,
  RecommendedCa,
  Loading,
  Error,
} from "../components/index";

const CADetails = () => {
  const [ca, setCa] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchCAData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://fake-api-v2ck.onrender.com/CADetails?name_like=${id}`
        );
        if (data.length === 0) {
          setLoading(false);
          setError("Provided Name does not mathed");
        } else {
          setCa(data[0]);
          setLoading(false);
        }
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
    <section>
      <div className=" flex flex-wrap justify-center my-20">
        <CaInfo ca={ca} />
        <CaAbout ca={ca} />
      </div>

      <RecommendedCa />
    </section>
  );
};

export default CADetails;
