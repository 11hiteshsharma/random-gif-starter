import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState("car");

  const { gif, loading, fetchData } = useGif();

  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <>
      <div className="w-1/2  bg-blue -500 rounded-lg border-black flex flex-col items-center gap-y-5 mt-[56px]">
        <h1 className="text-2xl underline uppercase font-bold">
          Random {tag} GIF
        </h1>

        {loading ? <Spinner /> : <img src={gif} width="450px" alt="" />}

        <input
          className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
          onChange={changeHandler}
          value={tag}
        />
        <button
          className="w-10/12 bg-yellow-400 text-lg py-2 rounded-lg mb-[20px]"
          onClick={() => fetchData(tag)}
        >
          Generate
        </button>
      </div>
    </>
  );
};

export default Tag;
