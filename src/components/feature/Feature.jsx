import React from "react";
import "./feature.scss";

const Feature = ({ title }) => {
  return (
    <div className="featureWrapper">
      <div className="featureContent">
        <div className="gradientBorder" />
        <h1 className="featureHeading">{title}</h1>
      </div>
    </div>
  );
};

export default Feature;
