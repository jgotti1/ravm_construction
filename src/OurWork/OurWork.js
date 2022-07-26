import React from "react";
import "./OurWork.css";
import Info from "./info";
import Photos from "./photos";
function OurWork() {
  return (
    <div>
      <div className="top_space"></div>
      <Info />

      <div className="our_work">
        <div className="top_space"></div>
        <Photos />
        <div className="bottom_space"></div>
      </div>
    </div>
  );
}

export default OurWork;
