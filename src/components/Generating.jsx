import React from "react";
import { loading } from "../assets";

const Generating = () => {
  return (
    <div
      className={`flex items-centeer h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] 
      ${className || ""} text-base`}
    >
      <img src={loading} alt="" className="w-5 h-5 mr-4" />
      hello my name is Priyansh Jain
    </div>
  );
};

export default Generating;
