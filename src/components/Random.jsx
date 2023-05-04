import axios from "axios";
import React, { useEffect, useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const { gif, loading, fetchData } = useGif();
  function clickhandler() {
    fetchData();
  }

  return (
    <>
      <div className="w-1/2  bg-green-500 rounded-lg border-black flex flex-col items-center gap-y-5 mt-[56px]">
        <h1 className="text-2xl underline uppercase font-bold">Random GIF</h1>

        {loading ? <Spinner /> : <img src={gif} width="450px" alt="" />}

        <button
          className="w-10/12 bg-yellow-400 text-lg py-2 rounded-lg mb-[20px]"
          onClick={clickhandler}
        >
          Generate
        </button>
      </div>
    </>
  );
};

export default Random;
